# UDPServer

# NodeJs UDP server/client

Run Server: Run UDP server through 
node index.mjs

Run Client: Send udp datagram packages to the server through 
nc -u 127.0.0.1 5500 

# C UDP server/client

Compile 
$ gcc server.c -o server
Run
$ ./server 4455

Compile 
$ gcc client.c -o client
Run
$ ./client 4455
