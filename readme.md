CWR Facebook api
---
### env guide
PORT=88900
DATABASE="mysql://root:1111@localhost:3306/cwr_facebook"
JWT_SECRET

CLOUDINARY_NAME
CLOUDINARY_API_KEY
CLOUDINARY_API_SECRET

---
### service 

|method |path |authen | params | query | body |
|:----- |:--- |:----:  |:------ |:----- |:---- |
|post|/auth/register|-|-|-|{ identity,firstName, lastName, password, confirmPassword }
|post|/auth/login|-|-|-|{ identity, password }
|get|/auth/me|y|-|-|-|
|get|/post|y|-|-|-|
|post|/post|y|-|-|{message, image(file)}
|put|/post|y|:id|-|{message, image(file)}
|delete|/post|y|:id|-|-
|post|/comment|y|-|-|{message, postId} 
|post|/like|y|-|-|{postId}
|delete|/like|y|:id|-|-


---
## Note
## create route & controller for /post (16:10)






