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
        { post_id: 1, post_link: 'https://etimg.etb2bimg.com/photo/93513128.cms', post_time: '2023-04-26T14:30:00.000Z', caption:"Wandering through ancient streets, lost in time and lost in wonder" },
        { post_id: 2, post_link: 'https://loremflickr.com/1200/800?random=456', post_time: '2023-04-25T09:15:00.000Z' },
        { post_id: 3, post_link: 'https://loremflickr.com/1200/800?random=178', post_time: '2023-04-24T18:45:00.000Z' }
      ]
    },
    {
      name: 'Alex',
      profile_pic: 'https://randomuser.me/api/portraits/men/42.jpg',
      active: false,
      posts: [
        { post_id: 1, post_link: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/26/c5/4c/65/caption.jpg?w=1200&h=-1&s=1', post_time: '2023-04-26T08:00:00.000Z', caption:"Sunsets and good vibes, that's what life is all about." },
        { post_id: 2, post_link: 'https://loremflickr.com/1200/800?random=123', post_time: '2023-04-23T11:30:00.000Z' }
      ]
    },
    {
      name: 'Sarah',
      profile_pic: 'https://randomuser.me/api/portraits/women/87.jpg',
      active: true,
      posts: [
        { post_id: 1, post_link: 'https://media.nomadicmatt.com/travelnomoney000.jpg', post_time: '2023-04-25T17:00:00.000Z', caption:"Making memories, one destination at a time." },
        { post_id: 2, post_link: 'https://loremflickr.com/1200/800?random=258', post_time: '2023-04-23T08:45:00.000Z' },
        { post_id: 3, post_link: 'https://loremflickr.com/1200/800?random=159', post_time: '2023-04-22T12:15:00.000Z' }
      ]
    },
    {
      name: 'David',
      profile_pic: 'https://randomuser.me/api/portraits/men/18.jpg',
      active: true,
      posts: [
        { post_id: 1, post_link: 'https://img.freepik.com/premium-photo/backpack-asian-man-mountain-see-view-panorama-beautiful-nature-landscape-sea-adventure-vacation-travel-leisure-asia-mu-ko-ang-thong-island-national-park-background-thailand_536080-1002.jpg?w=2000', post_time: '2023-04-26T10:30:00.000Z', caption:"Adventure awaits around every corner, embrace the journey" },
        { post_id: 2, post_link: 'https://loremflickr.com/1200/800?random=486', post_time: '2023-04-24T20:00:00.000Z' }
      ]
    }
  ]

  userDb=[
            {
              email:'v@v.com',
              password:'2356'
            },
            {
              email:'john@gmail.com',
              password:'asdf'
            }
          ]

  
}
