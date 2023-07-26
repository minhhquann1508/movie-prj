export const DOMAIN = 'https://movienew.cybersoft.edu.vn/';
export const GROUP_ID = 'GP09';
export const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MCIsIkhldEhhblN0cmluZyI6IjE0LzAxLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNTE5MDQwMDAwMCIsIm5iZiI6MTY3NzQzMDgwMCwiZXhwIjoxNzA1MzM4MDAwfQ.k7Kzay9-bYUjN7pTcMrYpgTq5Xe5U6jdvM1OUQ5L_2A';
export const USER_LOGIN = 'USER_LOGIN';
export const ACCESS_TOKEN = 'ACCESS_TOKEN';
export const LIST_CINEMA = [
    {
        key: 'BHDStar',
        img: 'https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png',
        background: 'https://homepage.momocdn.net/cinema/momo-upload-api-210812191036-637643922368260041.jpg',
        moTa: 'Hệ thống rạp chiếu phim hiện đại',
        danhGia: '4042'
    },
    {
        key: 'CGV',
        img: 'https://movienew.cybersoft.edu.vn/hinhanh/cgv.png',
        background: 'https://homepage.momocdn.net/cinema/momo-upload-api-210812191129-637643922898236024.jpg',
        moTa: 'Hệ thống rạp chiếu phim lớn nhất Việt Nam',
        danhGia: '1630'
    },
    {
        key: 'CineStar',
        img: 'https://movienew.cybersoft.edu.vn/hinhanh/cinestar.png',
        background: 'https://homepage.momocdn.net/cinema/momo-upload-api-210812191056-637643922560498568.jpg',
        danhGia: '1508',
        moTa: 'Hệ thống rạp chiếu phim giá rẻ, hiện đại bậc nhất',
    },
    {
        key: 'Galaxy',
        img: 'https://movienew.cybersoft.edu.vn/hinhanh/galaxy-cinema.png',
        background: 'https://homepage.momocdn.net/cinema/momo-upload-api-210812191028-637643922289129544.jpg',
        danhGia: '3320',
        moTa: 'Mang Hollywood đến gần bạn',
    },
    {
        key: 'LotteCinima',
        img: 'https://movienew.cybersoft.edu.vn/hinhanh/lotte-cinema.png',
        background: 'https://homepage.momocdn.net/cinema/momo-upload-api-210812191018-637643922185106035.jpg',
        moTa: 'Hệ thống rạp chiếu phim từ Hàn Quốc',
        danhGia: '1542'
    },
    {
        key: 'MegaGS',
        img: 'https://movienew.cybersoft.edu.vn/hinhanh/megags.png',
        background: 'https://homepage.momocdn.net/cinema/momo-upload-api-210812191046-637643922467566404.jpg',
        danhGia: '1208',
        moTa: 'Rạp chiếu phim tiêu chuẩn quốc tế tại Việt Nam',
    },
]

export const descCinemaBrandList = [
    {
        moTa: 'Hệ thống rạp chiếu phim hiện đại',
        uuDai: 'Ưu đãi 75K/VÉ 2D từ T3-T5, 85K/VÉ 2D từ T6-CN',
        danhGia: '4042'
    },
    {
        uuDai: 'Ưu đãi 59K/vé 2D cả tuần cho khách hàng mới Ví Trả Sau, tối đa 1 vé/khách hàng',
        moTa: 'Hệ thống rạp chiếu phim lớn nhất Việt Nam',
        danhGia: '1630'
    },
    {
        uuDai: '',
        danhGia: '1508',
        moTa: 'Hệ thống rạp chiếu phim giá rẻ, hiện đại bậc nhất',
    },
    {
        uuDai: '',
        danhGia: '3320',
        moTa: 'Mang Hollywood đến gần bạn',
    },
    {
        uuDai: 'Khuyến mãi 89K/ vé 2D cả tuần, không giới hạn',
        moTa: 'Hệ thống rạp chiếu phim từ Hàn Quốc',
        danhGia: '1542'
    },
    {
        uuDai: '',
        danhGia: '1208',
        moTa: 'Rạp chiếu phim tiêu chuẩn quốc tế tại Việt Nam',
    }
]

export const registerItems = [
    {
        label: 'Tên tài khoản',
        name: 'taiKhoan',
        placeholder: 'abc123',
        type: 'text'
    },
    {
        label: 'Họ tên',
        name: 'hoTen',
        placeholder: 'Nguyễn Văn A',
        type: 'text'
    },
    {
        label: 'Mật khẩu',
        name: 'matKhau',
        placeholder: '****',
        type: 'password'
    },
    {
        label: 'Số điện thoại',
        name: 'soDt',
        placeholder: '+84',
        type: 'text'
    },
    {
        label: 'Email',
        name: 'email',
        placeholder: 'abc123@gmail.com',
        type: 'email'
    }

]

export const loginItems = [
    {
        label: 'Tên tài khoản',
        name: 'taiKhoan',
        placeholder: 'abc123',
        type: 'text'
    },
    {
        label: 'Mật khẩu',
        name: 'matKhau',
        placeholder: '****',
        type: 'password'
    },
]
