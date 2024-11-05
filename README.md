# Host Hop
TO DO: Write description of app here

## Running the Host Hop app on your device
### Initial Installations
#### Server Side
Note: Node must be installed on your device. \
Nodemon must all be installed to your device. You can do this through the following line, that installs the nodemon package globally on your device.
* _npm install -g nodemon_


\
With the host_hop repo open, navigate to the server folder.\
Enter the following command in your terminal to install the following packages in the server folder:
* _npm install express dotenv mongodb mongoose cors bcrypt_ 

#### Client Side
From the terminal, navigate to the client directory.\
Run the following command to install all the dependencies inside the package.json file:
* _npm i_


\
If there are issues with the installations, you can try the following command to resolve them:
* _npm audit fix_


----
### Running the App
Open one terminal for the server, and navigate to the server directory.\
To start up the server, enter the following command in your terminal:
* _npm run dev_


\
Open another separate terminal for the client, and navigate to the client directory.\
Type the following command to start the app:
* _npm start_