export default defineEventHandler((event) => {
    console.log('server route requested')
    return {
      hello: "world",
    };
  });
