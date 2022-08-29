const flatGramImageApi = 'http://localhost:3000/images/'
const flatGramCommentsApi = 'http://localhost:3000/comments/'

const imageGoesHere = document.getElementById('card-image')
const titleGoesHere = document.getElementById('card-title')
const commentsGoHere = document.getElementById('comments-list')
const likeButton = document.getElementById('like-button')
const likesNum = document.getElementById('like-count')
const commentContainer = document.getElementById('comment')

fetch(flatGramImageApi)
    .then(resp => resp.json())
    .then(iterateImagesArray)
    .catch(console.error)

fetch(flatGramCommentsApi)
    .then(resp => resp.json())
    .then(iterateCommentsArray)
    .catch(console.error)

function iterateImagesArray(json) {
    json.forEach(addImageToPage)
}
function iterateCommentsArray(json) {
    json.forEach(addCommentsToPage)
}

function addImageToPage(imageObj) {
    const title = titleGoesHere;
    title.textContent = imageObj.title

    const imgElem = imageGoesHere;
    imgElem.src = imageObj.image
    imgElem.id = imageObj.id

    likeButton.addEventListener('click', () => {
        ++imageObj.likes
        likesNum.textContent = imageObj.likes
    })
}

function addCommentsToPage(commentsObj) {
    console.log(commentsObj)

    const realComments = commentsGoHere;


    realComments.id = commentsObj.id
    realComments.textContent = commentsObj.content
}

commentContainer.addEventListener('submit', addNewComment)

function addNewComment(event) {
    event.preventDefault()
    const newComment = event.target.content.value

    addNewComment(newComment)
    commentContainer.reset()
}
