import sanityClient from '@sanity/client'

export default sanityClient({
    projectId:'7oazl9jk',
    dataset: 'production',
    apiVersion: '2022-11-15',
    useCdn: true,
})