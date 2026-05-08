Select * from public/index.html
where Notification ID = 122345 and Timestamp >= '2026-06-01 00:00:00' and Timestamp <= '2026-06-30 23:59:59';
order by Timestamp desc;


function notify_all( student_ids :array , message : string ):
 for  student_id in student_ids :
  send_email( student_id , message ),
  save_to_db( student_id , message ),
  push_to_app( student_id , message )
