var countAdd = 1;

function addNewAttribute() {
    var formItemDiv = document.getElementById("form-item")

    var attrbrTitle = addAttributeTitle(countAdd)
    var inputTitle = addTitle(countAdd)
    var inputSubTitle = addSubTitle(countAdd)
    var inputDesc = addDescription(countAdd)

    var formgroup = addFormGroup()
    formgroup.appendChild(inputTitle)
    formgroup.appendChild(inputSubTitle)
    formgroup.appendChild(inputDesc)

    formItemDiv.appendChild(attrbrTitle)
    formItemDiv.appendChild(formgroup)

    countAdd++
}

function addTitle(index) {
    var encap = encapsulateInput()
    var titleDiv = document.createElement("input")

    titleDiv.setAttribute("type","text")
    titleDiv.setAttribute("class","form-control rounded-0 border-0 border-bottom")
    titleDiv.setAttribute("id","title-" + index)
    titleDiv.setAttribute("placeholder","Title")
    
    encap.appendChild(titleDiv)
    return encap;
}

function addSubTitle(index) {
    var encap = encapsulateInput()
    var subTitle = document.createElement("input")

    subTitle.setAttribute("type","text")
    subTitle.setAttribute("class","form-control rounded-0 border-0 border-bottom")
    subTitle.setAttribute("id","sub-title-" + index)
    subTitle.setAttribute("placeholder","Sub title")

    encap.appendChild(subTitle)
    return encap;
}


function addDescription(index) {
    var encap = encapsulateInput()
    var desc = document.createElement("textarea")

    desc.setAttribute("type","text")
    desc.setAttribute("class","form-control rounded-0 border-0 border-bottom")
    desc.setAttribute("id","description-" + index)
    desc.setAttribute("placeholder","Description")

    encap.appendChild(desc)
    return encap;
}

function addFormGroup() {
    var formgroupDiv = document.createElement("div")
    formgroupDiv.setAttribute("class","form-group row")
    return formgroupDiv
}

function encapsulateInput() {
    var encap = document.createElement("div")
    encap.setAttribute("class","my-1")
    return encap
}

function addAttributeTitle(index) {
  var divAttrbrInfo = document.createElement("div");
  divAttrbrInfo.setAttribute("class", "fs-3 text-black my-4");
  divAttrbrInfo.setAttribute("id", "attribute-title-" + index);

  var text = document.createTextNode("Attributes");
  divAttrbrInfo.appendChild(text);
  return divAttrbrInfo;
}
