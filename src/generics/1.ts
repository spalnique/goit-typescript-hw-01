import axios from 'axios';

type DataElement = { [prop: string]: unknown };
type Data = DataElement[];

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response: { data: T } = await axios.get(url);
    return response.data;
  } catch (error: unknown) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

fetchData<Data>('helloworld.com');
