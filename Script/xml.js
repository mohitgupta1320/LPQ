function xml()
{

xmlDoc = Sys.OleObject("Msxml2.DOMDocument.6.0");

xmlDoc.async = "False"
  
xmlDoc.load("C:\\xml\\testn.xml");

node =xmlDoc.documentElement;

Nodes = xmlDoc.selectNodes("//controls/demo/type");

for(i = 0; i < Nodes.length; i++)
  {
    Node = Nodes.item(i);
    Log.Message(Node.text); 
  } 
  

}
