# NFT

# Khái niệm NFT

# Ứng dụng NFT

# Tạo 1 NFT đơn giản

Ta sẽ sử dụng tiêu chuẩn ERC1155 để tạo ra các NFT của mình. Với ERC1155, ta có thể tạo nhiều NFT trên một contract ( khác với ERC721). 
Truffle là một bộ công cụ giúp chúng ta phát triển một dự án hợp đồng thông minh. Ta sẽ chọn Box (là một dạng template) Drizzle để bắt đầu dự án, ta có thể tham khảo thêm các Box khác trên trang chủ Drizzle. Mình cái thêm Extension ... trên VS code để hỗ trợ việc phát triển.

Ta tạo một contract mới kế thừa contract ERC1155. Trong hàm khởi tạo, ta sẽ sử tiến hành mint ( đào) các NFT mà mình định tạo ra. Ở đây mình sẽ tạo ra 100 NFT với id từ 1 đến 100.

Ta tiến hành Compile và Migrate contract ta vừa mới tạo trên Truffle dev net.

Ta sẽ tạo một Backend đơn giản để chứa các dữ liệu ứng với NFTs

Hiển thị meta data của NFT, mình sẽ sử dụng React + Drizzle để tạo ra một DApp, giúp hiển thị metadata từ NFT. Các thuộc tính của một NFT sẽ được tạo ra ngẫu nhiên.

Ta tạo một địa chỉ ví mới để chuyển NFT từ contract đến.

Chứng nhận sở hữu NFT

Hiển thị ảnh được lưu trong data của NFT

Metadata của NFT rất đa dạng, và được lưu trữ offchain (không nằm trong chuỗi khối), nên khả năng tùy biến, tương tác với nó hoàn toàn do người lập trình quyết định

# Kết






