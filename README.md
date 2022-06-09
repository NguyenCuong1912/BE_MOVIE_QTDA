Bước 1: - Bạn cần tải source code trên về và bật cmd gõ npm i -> cài các thư viện  
Bước 2: - Bạn cần có database để liên kết ta có 2 cách để tạo 1 database 
          + Cách 1 : bạn cài sequelize-cli và gõ npx sequelize db:migrate và chạy npx sequelize db:seed:all -> tạo ra 1 database trống 
          + Cách 2 : Attack database vô mysql -> có dữ liệu (https://drive.google.com/drive/folders/1m7NKpwO0Bs3V50Wxzakku1TCYAJH9E7X?usp=sharing)

Bước 2 : Bạn cần vào config/config.json thay đổi
"password": "pass của bạn",
"database": "tên database",
