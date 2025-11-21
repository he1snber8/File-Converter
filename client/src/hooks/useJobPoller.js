import { ref } from 'vue';
import { gqlRequest } from '../graphqlClient';

export function useJobPoller() {
  const status = ref('');
  const downloadUrl = ref('');

  async function poll(id) {
    const timer = setInterval(async () => {
      const data = await gqlRequest(`query($id:ID!){job(id:$id){status downloadUrl}}`,{id});
      status.value = data.job?.status || '';
      downloadUrl.value = data.job?.downloadUrl || '';
      if (status.value === 'DONE' || status.value === 'ERROR') clearInterval(timer);
    }, 1500);
  }

  return { status, downloadUrl, poll };
}