// The below states that our async function takes some type (i.e. <T>) and returns a promise of another type (i.e. Promise<T>).
export const getData = async <T>(url: string): Promise<T> => {
	const res = await fetch(url);
	return await res.json();
};
