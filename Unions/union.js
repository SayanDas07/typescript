var score = 33;
score = 44;
score = "55";
var me = { name: "sayan", id: 12 };
me = { username: "serdgg", id: 45 };
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
getDbId(3);
getDbId("3");
//array 
var data = [1, 2, 3];
var data2 = ["1", "2", "3"];
var data3 = ["1", "2", 3, true];
var seatAllotment;
seatAllotment = "aisle";
// seatAllotment = "pilot"
