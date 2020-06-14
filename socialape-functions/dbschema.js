let db = {
    users: [
        {
            userId: 'NxE0B5EfNUSFhPHuJVORvLMqz3m1',
            email: 'user@email.com',
            handle: 'user',
            createdAt: '2020-06-10T20:22:48.962Z',
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/socialape-f51c8.appspot.com/o/108672281654.jpg?alt=media',
            bio: 'Hello my name is user nice to meet you',
            website: 'https://user.com',
            location: 'Cluj, RO'
        }
    ],
    screams: [
        {
            userHandle: 'user',
            body: 'This is the scream body',
            createdAt: '2020-06-10T19:14:12.677Z',
            likeCount: 5,
            commentCount: 2
        }
    ],
    comments: [
        {        
            userHandle: 'user',
            screamId: 'p5HC87QixK1Z2s7rkihE',
            body: 'nice one mate!',
            createdAt: '2020-06-10T20:22:48.962Z'
        }
    ],
    notifications: [
        {
            recipient: 'user',
            sender: 'john',
            read: 'true | false',
            screamId: 'p5HC87QixK1Z2s7rkihE',
            type: 'like | comment',
            createdAt: '2020-06-10T20:22:48.962Z'
        }
    ]
};

const userDetails = {
    // Redux data
    credentials: {
        userId: 'NxE0B5EfNUSFhPHuJVORvLMqz3m1',
        email: 'user@email.com',
        handle: 'user',
        createdAt: '2020-06-10T20:22:48.962Z',
        imageUrl: 'https://firebasestorage.googleapis.com/v0/b/socialape-f51c8.appspot.com/o/108672281654.jpg?alt=media',
        bio: 'Hello my name is user nice to meet you',
        website: 'https://user.com',
        location: 'Cluj, RO'
    },
    likes: [
        {
            userHandle: 'user',
            screamId: 'p5HC87QixK1Z2s7rkihE'
        },
        {
            userHandle: 'user',
            screamId: 'EFd754G9toWnUJEdd9xR'
        },
    ]
}