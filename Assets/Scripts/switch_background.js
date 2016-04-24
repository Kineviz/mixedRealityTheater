#pragma strict

function Start () {
	Debug.Log("yes?");
}

function Update () {
	if (Input.GetKeyDown ("0"))
			switchBackground (0);

	if (Input.GetKeyDown ("1"))
			switchBackground (1);


	if (Input.GetKeyDown ("2"))
			switchBackground (2);


	if (Input.GetKeyDown ("3"))
			switchBackground (3);


	if (Input.GetKeyDown ("4"))
			switchBackground (4);


	if (Input.GetKeyDown ("5"))
			switchBackground (5);


	if (Input.GetKeyDown ("6"))
			switchBackground (6);


	if (Input.GetKeyDown ("7"))
			switchBackground (7);


	if (Input.GetKeyDown ("8"))
			switchBackground (8);


	if (Input.GetKeyDown ("9"))
			switchBackground (9);


}

var lastKey = 0;
function switchBackground(key) {
	if (lastKey == key) { return false; }
	switch(key) {
		case 0:
			var DeepSpaceBlue: Material = Resources.Load("DeepSpaceBlue");
			RenderSettings.skybox = DeepSpaceBlue; 
			print (key + " key was pressed");
		break;
		case 1:
			print (key + " key was pressed");
		break;
		case 2:
			print (key + " key was pressed");
		break;
		case 3:
			print (key + " key was pressed");
		break;
		case 4:
			print (key + " key was pressed");
		break;
		case 5:
			print (key + " key was pressed");
		break;
		case 6:
			print (key + " key was pressed");
		break;
		case 7:
			print (key + " key was pressed");
		break;
		case 8:
			print (key + " key was pressed");
		break;
		case 9:
			print (key + " key was pressed");
		break;
	}
	lastKey = key;
}