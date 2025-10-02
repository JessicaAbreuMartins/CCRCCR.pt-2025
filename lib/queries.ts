export const PAGE_BY_SLUG = `
query PageBySlug($slug: String!) {
pageBy(uri: $slug) {
id
title
content
slug
}
}`


export const EVENTS_LIST_QUERY = `
query EventsList {
events(first: 20) {
nodes {
id
title
date
time
location
description
}
}
}`