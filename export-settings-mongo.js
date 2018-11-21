db = connect("localhost:27017/nodebb");
print(db.getUsers().length);
print(db.getCollectionNames());
cursor = db.objects.find({"_key": "config"});

while(cursor.hasNext()) {
  printjson(cursor.next());
}

