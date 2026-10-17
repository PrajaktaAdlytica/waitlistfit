export const states=['Ready for review','Needs clarification','Blocked','Pending review','Rejected','Reviewed handoff'];
export const fixture=[
 ['001','10:30–11:00','Ready for review','Scheduler A','CV-03; recorded checks align. Inspect C at 09:15.','09:04','09:15'],
 ['002','11:30–12:00','Needs clarification','Scheduler B','Interpreter version and authorization not confirmed.','09:08','09:15'],
 ['003','13:00–13:30','Blocked','Template owner','Equipment source absent; override approval unknown; opt-in unrecorded.','09:10','09:20'],
 ['004','14:00–14:30','Pending review','Scheduler A','Intake complete; operational checks await review.','09:02','09:25'],
 ['005','14:30–15:00','Rejected','Scheduler B','Recorded visit duration exceeds the original window.','09:03','None — rejected'],
 ['006','15:00–15:30','Reviewed handoff','Scheduler A','Unsent review packet available. No appointment booked.','09:05','Review packet'],
 ['007','15:30–16:00','Pending review','Scheduler B','Intake complete; resource checks await review.','09:07','09:30'],
 ['008','16:00–16:30','Blocked','Template owner','Conflicting room hold; reconcile with resource owner.','09:09','09:35'],
 ['009','16:30–17:00','Ready for review','Scheduler A','Recorded checks align; manual review required.','09:11','09:40']
].map(([id,time,state,owner,reason,last,next],i)=>({id:'WLF-DEMO-'+id,short:id,time,state,owner:'Fictional '+owner,reason,last,next,site:i<6?'Clinic North':'Clinic South',version:'CV-03'}));
