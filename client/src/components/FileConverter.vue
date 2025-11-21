<template>
  <div class="card p-3">
    <form @submit.prevent="startConversion">
      <div class="mb-3">
        <input type="file" class="form-control" @change="onFile" />
      </div>
      <div class="mb-3">
        <select v-model="target" class="form-select">
          <option value="pdf-text">PDF to Text</option>
          <option value="img-png">Image to PNG</option>
        </select>
      </div>
      <button class="btn btn-primary" :disabled="loading">Convert</button>
    </form>
    <div class="mt-3" v-if="status">
      <span>Status: {{ status }}</span>
      <a v-if="downloadUrl" :href="downloadUrl" class="ms-3">Download</a>
    </div>
    <div class="text-danger mt-2" v-if="error">{{ error }}</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { gqlRequest } from '../graphqlClient';

const file = ref(null);
const target = ref('pdf-text');
const status = ref('');
const downloadUrl = ref('');
const error = ref('');
const loading = ref(false);

function onFile(e) {
  file.value = e.target.files[0] || null;
}

async function startConversion() {
  if (!file.value) {
    error.value = 'Please select a file.';
    return;
  }
  error.value = '';
  status.value = 'Uploading';
  loading.value = true;
  try {
    // TODO: use multipart request and call GraphQL Upload
    const data = await gqlRequest(`mutation{ convertFile(file:null,target:"${target.value}"){id status downloadUrl}}`);
    status.value = data.convertFile.status;
    downloadUrl.value = data.convertFile.downloadUrl;
  } catch (e) {
    error.value = e.message;
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
</style>