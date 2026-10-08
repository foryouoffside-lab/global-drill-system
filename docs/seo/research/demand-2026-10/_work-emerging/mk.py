import io
d={
('id','id'):["tes kecepatan klik","cps test","tes kecepatan mengetik","tes keyboard","tes waktu reaksi","aim trainer","tes refleks","permainan memori","latihan mengetik","tes kecepatan reaksi"],
('tr','tr'):["tıklama hızı testi","cps testi","yazma hızı testi","klavye testi","refleks testi","tepki süresi testi","nişan alma antrenmanı","hafıza oyunu","on parmak klavye","aim trainer"],
('pl','pl'):["test klikania","test szybkości pisania","test klawiatury","test refleksu","test czasu reakcji","trening celowania","gry pamięciowe","cps test","szybkość klikania","nauka pisania"],
('it','it'):["test velocità click","test velocità di scrittura","test tastiera","test riflessi","test tempo di reazione","allenamento mira","giochi di memoria","cps test","test dattilografia","aim trainer"],
('ru','ru'):["тест скорости клика","тест скорости печати","тест клавиатуры","тест реакции","тренировка аима","игры на память","cps тест","клавиатурный тренажер","проверка клавиатуры онлайн","тест на реакцию"],
('vn','vi'):["kiểm tra tốc độ click","test tốc độ gõ phím","kiểm tra bàn phím","kiểm tra phản xạ","luyện aim","game trí nhớ","cps test","kiểm tra tốc độ đánh máy","test click chuột","test tốc độ phản xạ"],
('th','th'):["ทดสอบความเร็วคลิก","ทดสอบการพิมพ์","ทดสอบคีย์บอร์ด","ทดสอบปฏิกิริยา","ฝึกเล็ง","เกมฝึกความจำ","cps test","ทดสอบความเร็วพิมพ์ดีด","ทดสอบรีเฟล็กซ์","เกมฝึกสมอง"],
('ph','en'):["cps test","typing test","keyboard test","reaction time test","aim trainer","memory game","click speed test","typing speed test","test ng bilis ng pag-type","reflex test"],
('in','en'):["cps test","typing test","keyboard test","reaction time test","aim trainer","memory game","click speed test","typing speed test","reflex test","brain training games"],
('in','hi'):["टाइपिंग टेस्ट","हिंदी टाइपिंग टेस्ट","कीबोर्ड टेस्ट","रिएक्शन टाइम टेस्ट","माउस क्लिक स्पीड टेस्ट","टाइपिंग स्पीड टेस्ट","मेमोरी गेम","cps test"],
}
with io.open('docs/seo/research/demand-2026-10/_work-emerging/phrases.tsv','w',encoding='utf-8',newline='\n') as f:
    for (cc,l),ps in d.items():
        for p in ps: f.write(f"{p}\t{cc}\t{l}\n")
print(sum(len(v) for v in d.values()))
