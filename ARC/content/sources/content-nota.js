
import { CONTENT_BASE, ARC_ACCESS_TOKEN } from 'fusion:environment'

const resolve = (query) => {
    console.log(query)
    const requestUri = `${CONTENT_BASE}/content/v4/`;
    if (query.hasOwnProperty("website_url")){
        const url_req = `${requestUri}?website_url=${query['website_url']}&website=${query['arc-site']}`;
        console.log(url_req)
      return url_req;
    };
    throw new Error("content-nota content source requires a url");
    
  };
  
  export default {
    resolve,
    params: {
      website_url: "text",
    },
  };



//   import request from 'request-promise-native'

// import collectionFeed from './collection-feed'

// const options = {
//   gzip: true,
//   json: true,
//   auth: { bearer: ARC_ACCESS_TOKEN },
// }

// // Add other required fields here which are not present above
// const includedFields = [
//   'additional_properties',
//   'content_elements',
//   'first_publish_date',
//   'slug',
//   'source'
// ].join()

// const fetch = (query) => {
//   return request({
//     uri: `${CONTENT_BASE}${collectionFeed.resolve(query)}`,
//     ...options
//   }).then((collectionResp) => {
//     const collectionResult = collectionFeed.transform(collectionResp, query)
//     const {
//       content_elements: contentElements = []
//     } = collectionResult
//     const ids = contentElements.map(({ _id }) => _id).join()
//     const {
//       website
//     } = query

//     return request({
//       uri: `${CONTENT_BASE}/content/v4/ids?website=${website}&ids=${ids}&included_fields=${includedFields}`,
//       ...options
//     }).then((idsResp) => {
//       const {
//         content_elements: stories = []
//       } = idsResp

//       if (stories.length) {
//         collectionResult.content_elements = collectionResult.content_elements.map((collectionStory) => {
//           return {
//             ...stories.find(({ _id }) => _id === collectionStory._id),
//             ...collectionStory
//           }
//         })
//       }

//       return collectionResult
//     })
//   })
// }

// export default {
//   fetch,
//   schemaName: collectionFeed.schemaName,
//   ttl: collectionFeed.ttl,
//   params: collectionFeed.params
// }