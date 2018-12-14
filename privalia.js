const { GraphQLServer } = require('graphql-yoga');
const axios = require('axios');

/// VERSION 1
// const typeDefs = `
//   type Query {
//     getMosaics: Block
//   }

//   type Block {
//     title: String
//     template: Int
//     elements: [Element]
//   }

//   type Element {
//     id: ID!
//     type: String
//     slots: Int
//     name: String
//     image: String
//   }
// `


// VERSION 2

const typeDefs = `
  query getMosaics {
    name
  }
`


const resolvers = {
  // VERSION 1
  // Query: {
  //   getMosaics: async () => {
  //     const response = await axios.get('http://es.privalia.com/mosaic/getPrivateMosaic/version/1', {
  //       headers: {
  //         cookie: 'PHPSESSID=tg3977rsarfe676rt7qg3o0fll; FC_SSO_PRIVALIA_es=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjAuNTQyMjM1MDAgMTU0MzQwNDM4MCJ9.eyJqdGkiOiIwLjU0MjIzNTAwIDE1NDM0MDQzODAiLCJpYXQiOjE1NDM0MDQzODAsIm5iZiI6MTU0MzQwNDM4MCwiZXhwIjoxNjA2NTE4Mjg0LCJzZXNzaW9uX2lkIjoidGczOTc3cnNhcmZlNjc2cnQ3cWczbzBmbGwifQ.cX-GGysfmj490avBo8OKGYQJ04IQCKNb9LIRGGLQ241wJQC7NMp4RmVsWNnlw1rtt-2Zg7YnVAVYDJ1A5SdKsCPlG4TaiW1tCXeuhcSkOQ8PiU3LJo1N1Oh5C-sZ-almOsquOKpZKlwZp8aiW4P5bPuyF2CcoMfhBGYDRmJveIar1lt_xmhOQO3XJqQPBy35o5u0uYl_zBW6DTavclrYQIvInxkhG8HFZy7_fzz-4SyUNyjhDrdudJZUSX_uTJy6g1TlBtmvL_2LNNGi2Rpt6fD_6UE0e2LMGIQjqZdgva4s0lqwRmST6vFTzLXpd1KdlRqx9-17Q8PrmYoGdVuQNw; _ga=GA1.2.2010384825.1543404382; cto_lwid=68bd83d8-f0bb-42bf-bf7d-21d66ca5a0ce; PRIVALIA_GDPR_ES=1; FC_PRIVALIA_S_es=48478820-11561b68f3b91a552139df3fec16ad3b-004abf4670b55cba305c0ea6ad889cf6; PMP_SSO_PRIVALIA=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjAuNjU0NzcxMDAgMTU0MzQwNDQwMSJ9.eyJqdGkiOiIwLjY1NDc3MTAwIDE1NDM0MDQ0MDEiLCJpYXQiOjE1NDM0MDQ0MDEsIm5iZiI6MTU0MzQwNDQwMSwiZXhwIjoxNjA2NTE4MzA1LCJzZXNzaW9uX2lkIjoidGczOTc3cnNhcmZlNjc2cnQ3cWczbzBmbGwifQ.GVKUCMgGTAw-RFMP1NgGwFUea8sffcf98B8GZKEedDqy4a-A-qaLBUFYQX2w-pzyO6id7sIim44LFcX-hiZIPFqV9Lpi0W0BUnoPFO5XIPUTiA7ZHYbMDrFHMeWI842MkVQzBUryr9AMcpSlLb-MngNYwm2zxxxlsSxMC8fYGxN-z_0e_CAJNPVEIrmL4LEZv5ICE1fWnm_b2W-vFkF-_SrM3Q1GbVfsB1ZYxeL4YEXy-iayOZPXC-QdLV3tThbC2Yrdi9SumR4dQniq4_wjE0V8Vxr8KowtS-LyVrQc0vI5FYcpZyXi0uNn7pxEIbcp4rqTTNjfc-bc4BZs7Ip8zw; _qubitTracker=749g9k32v0w-0jp134rlp-fl8sn74; watsonStorage=267713e0-41a3-4a98-a46f-cebf5d0d6935; watsonAutoLogin=48478820; _gid=GA1.2.1436849583.1544692213; providerCode=%7B%22providerCode%22%3A%22desktop%3Anm%3Aorganic%3Adirect%3Aprivalia.com%3Aweb%3A%3A%22%2C%22providerType%22%3A%22D%22%7D; qb_permanent=749g9k32v0w-0jp134rlp-fl8sn74:10:10:3:1:0::0:1:0:Bb/nt1:BcEiIH:::::91.126.135.227:barcelona:11259:spain:ES:41.3977:2.20153:unknown:unknown:barcelona:11419:migrated|1544692231466:CPI1=EB=B=87M=BL::Wem1O0q:WdaEkBM:0:0:0::0:0:.privalia.com:0; _fbp=fb.1.1544692232100.1887721798; ADRUM=s=1544695685143&r=https%3A%2F%2Fes.privalia.com%2Fmicrosites%2Findex%3F0; PRIVALIASESSID_es=fph0nulevji0cipb3b444v8um7; session_timestamp=1544696486%3B48478820; TS01b98eb7=018bcad25e5446e135f57ab699a24c67eb0a00fc3310b4f62e15ac911bbf9440f1d5f51dbaaabd089cb892975267ddcdbe7f40430a92a87214e497985506e73fa22d00ee6c; TS01170bf2=018bcad25e4864bdaaae22b6cbdedbeb724946792d12ecc439ea202b6b786aceb61c0127b3776bc2f754ef6e7757866735cf3bd28651387c19483fe15378413aa220f50f9b; AKA_A2=A; TS01fa3430=018bcad25e872222ab0049630de70f3250411b5a57cf956dfa0e793e8c6d9666089e0cd3de'
  //       },
  //     });
  //     const data = response.data.data;
  //     return data;
  //   }
  // }
  // VERSION 2
  getMosaics: async () => {
    const response = await axios.get('http://es.privalia.com/mosaic/getPrivateMosaic/version/1', {
      headers: {
        cookie: 'PHPSESSID=tg3977rsarfe676rt7qg3o0fll; FC_SSO_PRIVALIA_es=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjAuNTQyMjM1MDAgMTU0MzQwNDM4MCJ9.eyJqdGkiOiIwLjU0MjIzNTAwIDE1NDM0MDQzODAiLCJpYXQiOjE1NDM0MDQzODAsIm5iZiI6MTU0MzQwNDM4MCwiZXhwIjoxNjA2NTE4Mjg0LCJzZXNzaW9uX2lkIjoidGczOTc3cnNhcmZlNjc2cnQ3cWczbzBmbGwifQ.cX-GGysfmj490avBo8OKGYQJ04IQCKNb9LIRGGLQ241wJQC7NMp4RmVsWNnlw1rtt-2Zg7YnVAVYDJ1A5SdKsCPlG4TaiW1tCXeuhcSkOQ8PiU3LJo1N1Oh5C-sZ-almOsquOKpZKlwZp8aiW4P5bPuyF2CcoMfhBGYDRmJveIar1lt_xmhOQO3XJqQPBy35o5u0uYl_zBW6DTavclrYQIvInxkhG8HFZy7_fzz-4SyUNyjhDrdudJZUSX_uTJy6g1TlBtmvL_2LNNGi2Rpt6fD_6UE0e2LMGIQjqZdgva4s0lqwRmST6vFTzLXpd1KdlRqx9-17Q8PrmYoGdVuQNw; _ga=GA1.2.2010384825.1543404382; cto_lwid=68bd83d8-f0bb-42bf-bf7d-21d66ca5a0ce; PRIVALIA_GDPR_ES=1; FC_PRIVALIA_S_es=48478820-11561b68f3b91a552139df3fec16ad3b-004abf4670b55cba305c0ea6ad889cf6; PMP_SSO_PRIVALIA=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjAuNjU0NzcxMDAgMTU0MzQwNDQwMSJ9.eyJqdGkiOiIwLjY1NDc3MTAwIDE1NDM0MDQ0MDEiLCJpYXQiOjE1NDM0MDQ0MDEsIm5iZiI6MTU0MzQwNDQwMSwiZXhwIjoxNjA2NTE4MzA1LCJzZXNzaW9uX2lkIjoidGczOTc3cnNhcmZlNjc2cnQ3cWczbzBmbGwifQ.GVKUCMgGTAw-RFMP1NgGwFUea8sffcf98B8GZKEedDqy4a-A-qaLBUFYQX2w-pzyO6id7sIim44LFcX-hiZIPFqV9Lpi0W0BUnoPFO5XIPUTiA7ZHYbMDrFHMeWI842MkVQzBUryr9AMcpSlLb-MngNYwm2zxxxlsSxMC8fYGxN-z_0e_CAJNPVEIrmL4LEZv5ICE1fWnm_b2W-vFkF-_SrM3Q1GbVfsB1ZYxeL4YEXy-iayOZPXC-QdLV3tThbC2Yrdi9SumR4dQniq4_wjE0V8Vxr8KowtS-LyVrQc0vI5FYcpZyXi0uNn7pxEIbcp4rqTTNjfc-bc4BZs7Ip8zw; _qubitTracker=749g9k32v0w-0jp134rlp-fl8sn74; watsonStorage=267713e0-41a3-4a98-a46f-cebf5d0d6935; watsonAutoLogin=48478820; _gid=GA1.2.1436849583.1544692213; providerCode=%7B%22providerCode%22%3A%22desktop%3Anm%3Aorganic%3Adirect%3Aprivalia.com%3Aweb%3A%3A%22%2C%22providerType%22%3A%22D%22%7D; qb_permanent=749g9k32v0w-0jp134rlp-fl8sn74:10:10:3:1:0::0:1:0:Bb/nt1:BcEiIH:::::91.126.135.227:barcelona:11259:spain:ES:41.3977:2.20153:unknown:unknown:barcelona:11419:migrated|1544692231466:CPI1=EB=B=87M=BL::Wem1O0q:WdaEkBM:0:0:0::0:0:.privalia.com:0; _fbp=fb.1.1544692232100.1887721798; ADRUM=s=1544695685143&r=https%3A%2F%2Fes.privalia.com%2Fmicrosites%2Findex%3F0; PRIVALIASESSID_es=fph0nulevji0cipb3b444v8um7; session_timestamp=1544696486%3B48478820; TS01b98eb7=018bcad25e5446e135f57ab699a24c67eb0a00fc3310b4f62e15ac911bbf9440f1d5f51dbaaabd089cb892975267ddcdbe7f40430a92a87214e497985506e73fa22d00ee6c; TS01170bf2=018bcad25e4864bdaaae22b6cbdedbeb724946792d12ecc439ea202b6b786aceb61c0127b3776bc2f754ef6e7757866735cf3bd28651387c19483fe15378413aa220f50f9b; AKA_A2=A; TS01fa3430=018bcad25e872222ab0049630de70f3250411b5a57cf956dfa0e793e8c6d9666089e0cd3de'
      },
    });
    const data = response.data.data;
    return data;
  },
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log('Server running http://localhost:4000'));
