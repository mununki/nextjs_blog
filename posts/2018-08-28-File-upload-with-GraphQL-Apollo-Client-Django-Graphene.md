---
title: File upload with GraphQL Apollo client & Django + Graphene
createdAt: 2018-08-28
filename: 2018-08-28-File-upload-with-GraphQL-Apollo-Client-Django-Graphene
category: ["django"]
tag: ["django", "graphql", "graphene", "apollo"]
---

# File upload with GraphQL Apollo client & Django + Graphene

by Moondaddi on 2018-08-28

---

## Requirements

```shell
$ pip install django
$ pip install graphene_django
$ pip install graphene-file-upload
$ pip install python-resize-image
```

- Django==2.0.7
- graphene==2.1.2
- graphene-django==2.0.0
- graphene-file-upload==1.0.0
- graphql-core==2.0
- graphql-relay==0.4.5
- python-resize-image==1.1.11

<br />

## Backend

> Mutation part

```python
import graphene
from graphene_django import DjangoObjectType
from graphene_file_upload.scalars import Upload

class CUDNewsBoard(graphene.Mutation):
  newsboard = graphene.Field(NewsBoardType)

class Arguments: # other arguments up here...
  files = Upload()

  def mutate(self, info, files=None, ...):
    user = info.context.user

    if not user.is_staff:
      raise Exception('Admin permission is required!')

    post = NewsBoard(user=user, title=title, content=content)
    post.save()

    if files:
      for file in files:

        postimage = NewsBoardImage(post=post, image=None)
        postimage.save()

        image_obj = Image.open(file)
        # resize image
        image_obj = resizeimage.resize_width(image_obj, 800, validate=False)

        new_image_io = BytesIO()
        image_obj.save(new_image_io, image_obj.format)

        temp_name = file.name

        postimage.image.save(
          temp_name,
          content=ContentFile(new_image_io.getvalue())
        )

    return CUDNewsBoard(newsboard=post)
```

<br />

## Frontend

```javascript
const NEW_POST_NEWS = gql`
mutation postNew($files: Upload, ...) {
  cudNewsboard(files: $files, ...) {
    newsboard {
      id
      user {
        id
        fullname
      }
      title
      content
      firstDate
      views
      likes {
        id
      }
      newsboardimages {
        id
        image
      }
    }
  }
}
`;

class BoardNewsInput extends Component {
  state = {
    images: []
  };

  render() {
    return (
      <div>
        <input
          type="file"
          name="image"
          onChange={({
            target: {
              validity,
              files: [file]
            }
          }) =>
            validity.valid &&
            this.setState({
              images: [...this.state.images, file]
            })
          }
        />
        <Mutation
          mutation={NEW_POST_NEWS}
          variables={{
            files: this.state.images ? this.state.images : null
          }}
        >
          {(cudNewsboard, { loading, error, data }) => (
            <button
              onClick={() => {
                cudNewsboard();
              }}
            >
              POST
            </button>
          )}
        </Mutation>
      </div>
    );
  }
}
```

<br />

## Lesson & Learn

1. Array can be substitutive for FileList object in this case.

```javascript
state = {
  images: [file, file, file, ...]
}
```

<br />

2. Input onChange method

```javascript
<input
  onChange={({ validity, files: [file] }) =>
    validity.valid &&
    this.setState(prevState => {
      images: [...prevState.images, file];
    })
  }
/>
```

<br />

## References
