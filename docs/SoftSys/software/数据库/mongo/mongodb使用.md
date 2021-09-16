# mongodb使用

## 连接

使用MongoDB shell：

```shell
mongo -u root -p root888 --authenticationDatabase admin
```

## 数据库

### 查看数据库

```shell
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
```

### 创建及使用数据库

创建数据库xlink

```shell
> use xlink
switched to db xlink
```

插入一条测试语句：

```shell
> db.xlink.insert({"name":"asd"})
WriteResult({ "nInserted" : 1 })
```

插入后才能查看到刚才创建的数据库

```shell
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
xlink   0.000GB
```

### 删除数据库

切换到相应数据库后执行`db.dropDatabase()`可删除数据库：

```shell
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
xlink   0.000GB
> use xlink
switched to db xlink
> db.dropDatabase()
{ "dropped" : "xlink", "ok" : 1 }
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
```

## 集合

创建：

```shell
> db.createCollection("test_collection")
```

查看：

```shell
> show collections
```

集合中插入数据：

```shell
> db.test_collection.insert({"name" : "asd"})
```

删除：

```shell
> db.test_collection.drop()
```

## 文档

### 插入

MongoDB 使用 insert() 或 save() 方法向集合中插入文档

`db.COLLECTION_NAME.insert(document)`

插入文档你也可以使用 `db.COLLECTION_NAME.save(document)` 命令。如果不指定 _id 字段 save() 方法类似于 insert() 方法。如果指定_id 字段，则会更新该 _id 的数据。

### 更新

#### update

update() 方法用于更新已存在的文档：

```shell
db.collection.update(
   <query>,
   <update>,
   {
     upsert: <boolean>,
     multi: <boolean>,
     writeConcern: <document>
   }
)
```

**参数说明：**

* query : update的查询条件，类似sql update查询内where后面的。
* update : update的对象和一些更新的操作符（如$,$inc...）等，也可以理解为sql update查询内set后面的
* upsert : 可选，这个参数的意思是，如果不存在update的记录，是否插入objNew,true为插入，默认是false，不插入。
* multi : 可选，mongodb 默认是false,只更新找到的第一条记录，如果这个参数为true,就把按条件查出来多条记录全部更新。
* writeConcern :可选，抛出异常的级别。

如：

```shell
> db.col.insert({
    name: 'asd',
    sex: 'm',
    tags: ['book','hello','world'],
    age: 30
})
WriteResult({ "nInserted" : 1 })
> db.col.find().pretty()
{
 "_id" : ObjectId("5bfe0815b35a7fae010d3231"),
 "name" : "asd",
 "sex" : "m",
 "tags" : [
  "book",
  "hello",
  "world"
 ],
 "age" : 30
}
> db.col.update({'name':'asd'},{$set:{'name':'new man'}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.col.find().pretty()
{
 "_id" : ObjectId("5bfe0815b35a7fae010d3231"),
 "name" : "new man",
 "sex" : "m",
 "tags" : [
  "book",
  "hello",
  "world"
 ],
 "age" : 30
}
```

#### save

save() 方法通过传入的文档来替换已有文档。

```shell
db.collection.save(
   <document>,
   {
     writeConcern: <document>
   }
)
```

**参数说明：**

* document : 文档数据。
* writeConcern :可选，抛出异常的级别。

如：替换_id为5bfe0815b35a7fae010d3231的文档数据

```shell
> db.col.save({
    "_id": ObjectId("5bfe0815b35a7fae010d3231"),
    "name": "new man 1",
    "sex": "f",
    "tags": [
        "one",
        "two",
        "three"
    ],
    "age": 50
  })
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.col.find().pretty()
{
 "_id" : ObjectId("5bfe0815b35a7fae010d3231"),
 "name" : "new man 1",
 "sex" : "f",
 "tags" : [
    "one",
    "two",
    "three"
 ],
 "age" : 50
}
```

#### 更多实例

只更新第一条记录：

`db.col.update( { "count" : { $gt : 1 } } , { $set : { "test2" : "OK"} } );`

全部更新：

`db.col.update( { "count" : { $gt : 3 } } , { $set : { "test2" : "OK"} },false,true );`

只添加第一条：

`db.col.update( { "count" : { $gt : 4 } } , { $set : { "test5" : "OK"} },true,false );`

全部添加进去:

`db.col.update( { "count" : { $gt : 5 } } , { $set : { "test5" : "OK"} },true,true );`

全部更新：

`db.col.update( { "count" : { $gt : 15 } } , { $inc : { "count" : 1} },false,true );`

只更新第一条记录：

`db.col.update( { "count" : { $gt : 10 } } , { $inc : { "count" : 1} },false,false );`

### 删除

remove()：

```shell
db.collection.remove(
   <query>,
   {
     justOne: <boolean>,
     writeConcern: <document>
   }
)
```

**参数说明：**

* query :（可选）删除的文档的条件。
* justOne : （可选）如果设为 true 或 1，则只删除一个文档。
* writeConcern :（可选）抛出异常的级别。

如：

```shell
> db.col.insert({
    name: 'asd',
    sex: 'm',
    tags: ['book','hello','world'],
    age: 30
})
WriteResult({ "nInserted" : 1 })
> db.col.insert({
    name: 'asd',
    sex: 'm',
    tags: ['book','hello','world'],
    age: 30
})
WriteResult({ "nInserted" : 1 })
> db.col.find().pretty()
{
 "_id" : ObjectId("5bfe0be2b35a7fae010d3232"),
 "name" : "asd",
 "sex" : "m",
 "tags" : [
  "book",
  "hello",
  "world"
 ],
 "age" : 30
}
{
 "_id" : ObjectId("5bfe0be3b35a7fae010d3233"),
 "name" : "asd",
 "sex" : "m",
 "tags" : [
  "book",
  "hello",
  "world"
 ],
 "age" : 30
}
> db.col.remove({'name':'asd'})
WriteResult({ "nRemoved" : 2 })
```

如果你只想删除第一条找到的记录可以设置 justOne 为 1，如下所示：

```shell
> db.COLLECTION_NAME.remove(DELETION_CRITERIA,{justOne: 1})
```

如果你想删除所有数据，可以使用以下方式（类似常规 SQL 的 truncate 命令）：

```shell
> db.col.remove({})
> db.col.find()
```

remove() 方法 并不会真正释放空间。

需要继续执行 db.repairDatabase() 来回收磁盘空间。

#### 最新方法

remove() 方法已经过时了，现在官方推荐使用 deleteOne() 和 deleteMany() 方法。

如删除集合下全部文档：

`db.inventory.deleteMany({})`

删除 status 等于 A 的全部文档：

`db.inventory.deleteMany({ status : "A" })`

删除 status 等于 D 的一个文档：

`db.inventory.deleteOne( { status: "D" } )`

### 查询

`db.col.find().pretty()`
`db.col.findOne()`

### 索引

MongoDB使用 createIndex() 方法来创建索引。

`db.collection.createIndex(keys, options)`

语法中 Key 值为你要创建的索引字段，1 为指定按升序创建索引，如果你想按降序来创建索引指定为 -1 即可。

`db.col.createIndex({"_id":1})`
