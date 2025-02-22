FROM quay.io/xelectra/xasena:latest
RUN git clone https://github.com/CyberWarriorsX/FORZEN-MD-QR-CODE /root/CyberWarriorsX
WORKDIR /root/CyberWarriorsX/
RUN npm install npm@latest
RUN yarn install --network-concurrency 1
EXPOSE 8000
CMD ["npm", "start"]
