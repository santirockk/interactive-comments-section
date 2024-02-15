export async function fetchData() {
    try {
        const response = await fetch('../src/assets/data.json');
        if (!response.ok) {
          throw new Error(`Error ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data
    } catch (error) {
        console.error(error.message);
    }
}


