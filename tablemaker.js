class tablemaker{
    
    constructor(moveset,playerStats){}

    ShowCharacterStatus(){
        this.ShowTableFromObject()
        this.ShowTableFromArrayOfObjects()
    }

    GiveNewMove(){
        var newmove = {movename:"newstrike",damage:"300"}
        if(!moveset.find(mov=>mov.movename==newmove.movename)){
            moveset.push(newmove)
            var elem = document.getElementById("movestable");
            elem.parentNode.removeChild(elem);
            tm.ShowTableFromArrayOfObjects()
        }else{
            alert("you already got your move!");
        }
    }

    RefreshCharacterStatus(){
        var elem = document.getElementById("movestable");
        elem.parentNode.removeChild(elem);
        elem = document.getElementById("objecttable");
        elem.parentNode.removeChild(elem);
        this.ShowCharacterStatus();
    }

    ShowTableFromArray(dataToShow,insertTableBefore){
        var table = document.createElement("table");
        for(var i = 0; i < dataToShow.length; i++) {
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            td.appendChild(document.createTextNode(dataToShow[i]));
            tr.appendChild(td);
            table.appendChild(tr);
        }
        document.body.insertBefore(table,document.getElementById(insertTableBefore))
    }

    ShowTableFromObject(){
        var table = document.createElement("table");
        table.id = "objecttable"
        table.border = 1;
        Object.entries(playerStats).forEach(
        ([key, value]) => {
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            var td2 = document.createElement("td");
            var bold = document.createElement("b");
            td.appendChild(document.createTextNode(value));
            bold.appendChild(document.createTextNode(key));
            td2.appendChild(bold);
            tr.appendChild(td2);
            tr.appendChild(td);
            table.appendChild(tr);
        });
        document.body.insertBefore(table,document.getElementById("spacer2"))
    }

    ShowTableFromArrayOfObjects(){
        var table = document.createElement("table");
        table.id = "movestable"
        table.border = 1;
        var htr = document.createElement("tr");
        Object.entries(moveset[0]).forEach(([key, value]) => {
            var bold = document.createElement("b");
            bold.appendChild(document.createTextNode(key));
            var anothertd = document.createElement("td");
            anothertd.appendChild(bold);
            htr.appendChild(anothertd);
        });
        table.appendChild(htr)
        for(var i = 0; i < moveset.length; i++) {
            var tr = document.createElement("tr");
            Object.entries(moveset[i]).forEach(([key, value]) => {        
                    var td = document.createElement("td");
                    td.appendChild(document.createTextNode(value));
                    tr.appendChild(td);
            });
            table.appendChild(tr);
        }
        document.body.insertBefore(table,document.getElementById("spacer1"))
    }
}