p = 'app/ko/drills/visual/reaction-speed/light-reaction/page.js'
s = open(p, encoding='utf-8', newline='').read()
pairs = [
 ("본 훈련은 칠흑 같은 암실 배경에 초고대비 순백색 섬광을 투사하여 망막 신경절 세포의 탈분극 속도를 극대화하도록 설계되었습니다. 또한 포스너(Posner, 1980)의 공간 주의 집중 모델과 바벨리어(Dye et al., 2009)의 연구는 집중 훈련을 통해 대뇌 운동 계획 시간을 유의미하게 압축할 수 있음을 증명합니다.",
  "이 테스트는 어두운 배경에 대비가 높은 흰색 신호를 사용해 신호를 알아보기 쉽게 했습니다. 포스너(Posner, 1980)의 공간 주의 연구와 Dye et al.(2009)의 연구는 주의와 연습이 반응 시간에 영향을 줄 수 있음을 보여 줍니다."),
]
for a, b in pairs:
    assert s.count(a) == 1, a[:40]
    s = s.replace(a, b)
open(p, 'w', encoding='utf-8', newline='').write(s)
print('ok')
