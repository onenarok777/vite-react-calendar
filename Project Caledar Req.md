Project Caledar
# Req เบิ้องต้น
# React For Level 0

Front End
    * รองรับขนาดจอ มือถือ
    * หน้าเข้าสู่ระบบ !! 
        - username
        - password 
        - แยก Admin | User
        ! ไม่สามารถสมัครสมาชิกได้
    * หน้าปฏิทิน
        - เพิ่มข้อมูลลงปฏิทินได้
        - เพิ่ม ลบ แก้ไขได้ตามสิทธิ์ที่อนุญาตุ    
    * Admin 
        - จัดการ user และสิทธิ์
Back End 
    * Login
        - JWT Token
        - แบ่ง Router
        - ใช้ DB SQL
        - มี Web Socket 
Database
    * User 
        - id
        - usid
        - username
        - full_name
        - password
        - created
    * Caledar
        - id
        - title
        - detail
        - start_date
        - end_date
        - usid
        - created