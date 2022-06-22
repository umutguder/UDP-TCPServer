# UDPServer

# NodeJs UDP server

Run Server: Run UDP server through 
node udpServer.mjs

# C UDP server

Compile 
$ gcc udpServer.c -o server
Run
$ ./server 5500

UDP Client

# Run Client: Send udp datagram packages to the server through 
nc -u 127.0.0.1 5500 

TCP Client

# NodeJs TCP server

Run Server: Run UDP server through 
node tcpServer.mjs

# Run Client
nc 127.0.0.1 8800 
