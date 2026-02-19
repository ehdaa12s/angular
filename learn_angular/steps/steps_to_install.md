Step 1: Install NVM

Open your Terminal (Finder > Applications > Utilities > Terminal) and run:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
2- close terminal and open another one
3- verfiy mvn installed 
 nvm --version
 4- Install a Compatible Node Version
     nvm install 22
5- use the new node version 
   nvm use 22
   #set defult as 22
   nvm alias default 22
6- verfiy 
  node --version 
  ng version 
7- if angular not exit install it using 
# Step 1: Install Angular CLI version 20
npm install -g @angular/cli@20

# Step 2: Verify installation
ng version

8- # Create new project
ng new my-app-v20

# Navigate to project
cd my-app-v20

# Run the app
ng serve
