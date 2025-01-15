export async function fetchLanguages(url: string): Promise<string | string[]> {
  const fallbackMessage = "without programming languages";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(fallbackMessage);
    }

    const data = await response.json();

    return Object.keys(data);
  } catch (error) {
    throw new Error(error as string);
  }
}
