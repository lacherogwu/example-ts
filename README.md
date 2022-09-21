I have `example-project` directory and `example-lib` directory
Image `example-lib` is an NPM library and image `example-project` has the lib in it's `node_modules/`

Now, `example-project/index.js` calls the `start()` from `example-lib/index.js` which reading the files from the `watchDir` property and reading each file, looking at the exported functions (this is not implemented now, but easy ti achieve)

Now image that the start function saved the object in memory and will generate the types.

the types of the `use()` should be by the created object.

so if you will look at the current folder structure, the type of the use function should be ('items/createItem'|'users/sampleFunction'|'users/getUser')

because we have `items.js` that exports `createItem()` and `users.js` that exports `sampleFunction()` and `getUser()`

and the `use()` should give the following intellisense
![image](https://i.postimg.cc/MTMWJXyb/image.png)
