/**
 * It takes an array of objects with an id property and returns an array of objects with a type and id
 * property
 * @param resultsWithIds - An array of objects with an id property.
 * @param tagType - The type of tag you want to create.
 * @returns An array of objects.
 */
export function providesList(resultsWithIds, tagType) {
	return resultsWithIds
		? [
				{ type: tagType, id: 'LIST' },
				...resultsWithIds.map(({ id }) => ({ type: tagType, id })),
		  ]
		: [{ type: tagType, id: 'LIST' }]
}
