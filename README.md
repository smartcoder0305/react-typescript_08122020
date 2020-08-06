# Welcome to the React with TypeScript

![DevelopIntelligence Logo](images/developintelligence-logo.jpg "DevelopIntelligence Logo")

Now more than ever, enterprise environments must support their tech & L&D priorities by delivering hyper-focused and targeted learning programs that work for each individual company, flawlessly.

The largest and most successful enterprise companies trust DevelopIntelligence to advance their tech learning environments. Let us show you what we can do for the success of your programs.

DevelopIntelligence Delivers.

## Class Information Page

[https://www.t4d.io/developintelligence-react-typescript-08122020](https://www.t4d.io/developintelligence-react-typescript-08122020)

## Other Resources

The instructor will distribute additional private links during class for downloading courseware, and downloading recordings...

All code in this repository is distributed under the [MIT license](license.txt).

## How to Use the Instructor's Version

The following instructions will help students pull down the instructor's version to resume class where the instructor is.

1. Clone this repository to a new folder. Do not attempt to copy these files over your version or another version which you have cloned. Replace `FOLDER_NAME` with the name of a new folder which will be created when the content is cloned.

```
git clone https://github.com/t4d-classes/react-typescript_08122020.git FOLDER_NAME
```

2. Change into the folder you cloned into.

```
cd FOLDER_NAME
```

3. Change into the `demo-app` folder you cloned into.

```
cd demo-app
```

4. Run the following command to install the NPM packages.

```
npm install
```

5. To start the React application, run the following command.

```
npm start
```

6. Open the editor of your choice and edit the files.

## Configuration and Data for the REST API part of the class

To configure the REST API, two packages will need to installed into the project created by the Create React App generator.

1. To install those packages, run the following command from within the root folder of the project:

```bash
npm install -D json-server npm-run-all
```

2. Next, the `package.json` needs to be updated to easily run the REST API provides by the [JSON Server](https://github.com/typicode/json-server). Here is the `scripts` configuration which can be copied and pasted for the REST API. When asked by the instructor, replace the `scripts` section of the `package.json` file in the `demo-app` project with the `scripts` section below.

```json
"scripts": {
  "start": "run-p web rest",
  "web": "react-scripts start",
  "rest": "json-server --port 3060 ./db.json",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"
},
```

3. Finally, the REST API data file needs to be created. The data file should be named `db.json` and placed in the project root folder. 

**VERY IMPORTANT! The `db.json` file will be placed in the `demo-app` folder, the same folder as the `package.json` file. The `db.json` file should **NOT** be placed in the `src` folder.**

4. The JSON below should be copied and pasted into the file.

```json
{
  "colors": [
    { "id": 1, "name": "red", "hexcode": "#ff0000" },
    { "id": 2, "name": "green", "hexcode": "#00ff00" },
    { "id": 3, "name": "blue", "hexcode": "#0000ff" }
  ],
  "cars": [
    {"id":1,"make":"Ford","model":"Fusion Hybrid","year":2019,"color":"blue","price":45000},
    {"id":2,"make":"Tesla","model":"S","year":2018,"color":"red","price":100000}
  ]
}
```

5. To verify the REST API is working, run the `npm start` command and browse the following URL: [http://localhost:3060/cars](http://localhost:3060/cars).

<br><br>
All course content and teaching is provided by: [<img src="images/t4dio-logo.gif" alt="T4D.IO Logo">](http://www.t4d.io)


