# Bitasmbl-File-Converter-b67a34-Nodar_Mebunia

## Description
Build a web application that allows users to upload files and convert them between formats, such as PDF to text or images to PNG. The system focuses on simplicity, intuitive UI, and fast conversions without requiring complex setup.

## Tech Stack
- GraphQL
- Bootstrap
- Vue.js

## Requirements
- Allow users to upload PDF and image files
- Convert PDF documents to text and images to PNG format
- Provide download links for converted files
- Show status updates during conversion (loading/progress)
- Handle unsupported file types and errors gracefully

## Installation
bash
git clone https://github.com/he1snber8/File-Converter.git
cd File-Converter


## Usage
- Start the GraphQL server
- Run the Vue.js app
- Open the app in a browser

## Implementation Steps
1. Scaffold Vue.js app UI with Bootstrap.
2. Add upload form for PDF and image files.
3. Implement GraphQL schema for upload, conversion status, and download data.
4. Wire Vue.js components to GraphQL operations for upload and status.
5. Implement conversion logic for PDF to text and images to PNG.
6. Expose converted file locations via GraphQL.
7. Add error handling for unsupported types and failures.

## GraphQL Endpoints
- `mutation uploadFile`
- `query conversionStatus`
- `query downloadLink`