const INITIAL_STATE = {
    section: [
        {
            title:'Hats',
            id:1,
            image: 'https://images.freeimages.com/images/large-previews/d91/hat-1418845.jpg',
            linkUrl: 'shop/hats'
        },
        {
            title:'Sneakers',
            id: 2,
            image: 'https://images.freeimages.com/images/large-previews/5bc/sneakers-1543782.jpg',
            linkUrl: 'shop/sneakers'
        },
        {
            title: 'Jackets',
            id: 3,
            image: 'https://images.freeimages.com/images/large-previews/fc4/camouflage-1426167.jpg',
            linkUrl: 'shop/jackets'
        },
        {
            title: 'Mens',
            id: 4,
            image: 'https://images.freeimages.com/images/large-previews/67c/man-1438092.jpg',
            size: 'large',
            linkUrl: 'shop/mens'
        },
        {
            title: 'Womens',
            id: 5,
            image: 'https://images.freeimages.com/images/large-previews/f8a/nevin-1435774.jpg',
            size: 'large',
            linkUrl: 'shop/womens'
        }
    ]
}

const directoryReducer = (state=INITIAL_STATE, action)=>{
    
    switch(action.type){
        default:
            return state
    }
}

export default directoryReducer;
