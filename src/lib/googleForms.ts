/**
 * Submits a form to Google Forms natively using fetch with no-cors mode.
 * 
 * @param formId The Google Form ID (from the URL /d/e/FORM_ID/viewform)
 * @param data A record of entry.XXXX IDs and their values.
 * @returns A promise that resolves when the network request completes.
 */
export async function submitToGoogleForm(formId: string, data: Record<string, string>) {
  const url = `https://docs.google.com/forms/d/e/${formId}/formResponse`;
  const formData = new URLSearchParams();

  for (const [key, value] of Object.entries(data)) {
    formData.append(key, value);
  }

  // Google Forms requires POST and doesn't return CORS headers,
  // so we use 'no-cors' mode. The response will be opaque, but
  // if the network request succeeds, we assume it went through.
  return fetch(url, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: formData.toString(),
  });
}
