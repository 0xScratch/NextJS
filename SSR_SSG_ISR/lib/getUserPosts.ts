export default async function getUserPosts(userId: string) {
    // This is by default i.e force-cache -> It automatically render pages at server side and display them to the user thus reducing the laod time, but if in some case there's a usual update in the api or the database you are fetching some data, this method might produce some problems
    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, { cache: "force-cache" })
    
    // This doesn't store any cache in advance and thus re-renders pages everytime a user makes a request, good in case of updates but if there were no updates, this method will surely increase the load time of the servers
    // const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, { cache: "no-store" })
    
    // This is a middle thing between force-cache and no-store or we can say, between SSR(Server Side Rendering) and SSG(Server Side Generation)... Here there's used to be a time setup, like for e.g 60 seconds..This means that after every 60 second server will check whether the fetched data from the particular api or database changed or not, if it did then the page gonna update otherwise it won't
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, { next: { revalidate: 60} })
    

    if (!res.ok) undefined

    return res.json()
}