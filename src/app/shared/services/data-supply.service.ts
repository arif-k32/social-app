import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSupplyService {

  constructor() { }
  users:any[] = [
    {
      name: 'Emily',
      profile_pic: 'https://randomuser.me/api/portraits/women/65.jpg',
      active: true,
      posts: [
        { post_id: 1, post_link: 'https://loremflickr.com/1200/800?random=123', post_time: '2023-04-26T14:30:00.000Z', caption:"Cuddle time with my furry best friend! #catsofinstagram #caturday" },
        { post_id: 2, post_link: 'https://loremflickr.com/1200/800?random=456', post_time: '2023-04-25T09:15:00.000Z' },
        { post_id: 3, post_link: 'https://loremflickr.com/1200/800?random=178', post_time: '2023-04-24T18:45:00.000Z' }
      ]
    },
    {
      name: 'Alex',
      profile_pic: 'https://randomuser.me/api/portraits/men/42.jpg',
      active: false,
      posts: [
        { post_id: 1, post_link: 'https://loremflickr.com/1200/800?random=147', post_time: '2023-04-26T08:00:00.000Z', caption:"Just enjoying the simple pleasures in life. #catlife #cozy" },
        { post_id: 2, post_link: 'https://loremflickr.com/1200/800?random=123', post_time: '2023-04-23T11:30:00.000Z' }
      ]
    },
    {
      name: 'Sarah',
      profile_pic: 'https://randomuser.me/api/portraits/women/87.jpg',
      active: true,
      posts: [
        { post_id: 1, post_link: 'https://loremflickr.com/1200/800?random=369', post_time: '2023-04-25T17:00:00.000Z', caption:"If you need me, I'll be napping with my kitty. #catnap #snuggles" },
        { post_id: 2, post_link: 'https://loremflickr.com/1200/800?random=258', post_time: '2023-04-23T08:45:00.000Z' },
        { post_id: 3, post_link: 'https://loremflickr.com/1200/800?random=159', post_time: '2023-04-22T12:15:00.000Z' }
      ]
    },
    {
      name: 'David',
      profile_pic: 'https://randomuser.me/api/portraits/men/18.jpg',
      active: true,
      posts: [
        { post_id: 1, post_link: 'https://loremflickr.com/1200/800?random=357', post_time: '2023-04-26T10:30:00.000Z', caption:"This is what pure happiness looks like. #catlove #felinefriendship" },
        { post_id: 2, post_link: 'https://loremflickr.com/1200/800?random=486', post_time: '2023-04-24T20:00:00.000Z' }
      ]
    }
  ]
 

  
}
