import { api } from './api';

export async function getCategories() {
    const resp = await api.get('/categories', {});
    console.log(resp);
}
