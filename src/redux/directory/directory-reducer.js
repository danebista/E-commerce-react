const INITIAL_STATE = {
    section: [
        {
            title:'Hats',
            id:1,
            image: 'https://images.freeimages.com/images/large-previews/d91/hat-1418845.jpg',
            linkUrl: 'hats'
        },
        {
            title:'Sneakers',
            id: 2,
            image: 'https://images.freeimages.com/images/large-previews/5bc/sneakers-1543782.jpg',
            linkUrl: ''
        },
        {
            title: 'Trousers',
            id: 3,
            image: 'https://images.freeimages.com/images/large-previews/728/jeans-1421398.jpg',
            linkUrl: ''
        },
        {
            title: 'Men',
            id: 4,
            image: 'https://images.freeimages.com/images/large-previews/67c/man-1438092.jpg',
            size: 'large',
            linkUrl: ''
        },
        {
            title: 'Women',
            id: 5,
            image: 'https://images.freeimages.com/images/large-previews/f8a/nevin-1435774.jpg',
            size: 'large',
            linkUrl: ''
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
