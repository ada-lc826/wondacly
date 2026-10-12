from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.lib.utils import simpleSplit

root = Path(__file__).resolve().parent.parent
target = root / 'dist' / 'Emilie-Chen-CV.pdf'
c = canvas.Canvas(str(target), pagesize=(595.28,841.89))
c.setTitle('Emilie (Liuying) Chen - Curriculum Vitae')
c.setAuthor('Emilie Chen')
ink,muted = HexColor('#263e34'),HexColor('#626b60')
left,right=48,547
y=792
def text(value,size=9.4,font='Helvetica',color=ink,leading=14):
    global y
    c.setFillColor(color);c.setFont(font,size)
    for line in simpleSplit(value,font,size,right-left):
        c.drawString(left,y,line);y-=leading
def section(value):
    global y
    y-=10;c.setStrokeColor(HexColor('#cdd4c5'));c.line(left,y+3,right,y+3);y-=14
    text(value.upper(),8.4,'Helvetica-Bold',muted,17)
def role(title,subtitle,body):
    text(title,10,'Helvetica-Bold',leading=14)
    text(subtitle,8.7,'Helvetica',muted,13)
    text(body,9.1,leading=13)
    global y
    y-=6

text('EMILIE (LIUYING) CHEN',25,'Times-Roman',leading=30)
text('Computational Science | Optimization | Machine Learning',10,'Helvetica',muted,19)
text('London, UK  |  chenliuying666@163.com  |  github.com/ada-lc826',8.7,leading=16)
c.linkURL('mailto:chenliuying666@163.com',(106,y+13,250,y+25),relative=0)
c.linkURL('https://github.com/ada-lc826',(305,y+13,445,y+25),relative=0)
section('Education')
role('Imperial College London','MSc Applied Computational Science and Engineering | Sep 2026 - Nov 2027 (expected)','Computational mathematics, numerical programming, data science and machine learning.')
role('Shanghai University - Sino-European School of Technology','BEng Information Engineering | Sep 2022 - Jun 2026','Shanghai Outstanding Graduate. GPA: 3.33/4.0 (85.28/100).')
section('Research & recognition')
role('MCM / ICM 2025 - Finalist Award','Mathematical modelling | Lead paper writer','Sustainable tourism modelling with NSGA-II multi-objective optimization, Sobol sensitivity analysis, and Monte Carlo simulation.')
role('Research on Production Decision Making Based on Genetic Algorithm','Co-first author | Liuying Chen, Yi Chen, Jiahao Wang (equal contribution)','Genetic algorithms, 0-1 integer programming and dynamic programming for inspection and disassembly decisions in multi-stage production.')
role('Tilting-Rotor Quadrotor Trajectory Tracking and Attitude-Constrained Control','Co-author | IEEE ICUS 2025','Linear model predictive control for trajectory tracking with attitude constraints.')
text('Other recognition: APMCM 2024 Third Prize; software copyright co-holder for a production process optimization and decision management system.',8.9,leading=13)
section('Experience')
role('Algorithm Intern - Vconics Automotive','Jun - Jul 2025 | Shanghai','Worked on model predictive control, state estimation and automotive engineering using MATLAB/Simulink.')
role('Data Analysis Intern - Polestar','Aug - Sep 2023 | Shanghai','SQL analytics, BERT / BiLSTM-CRF NLP workflows, and business intelligence dashboards.')
section('Selected projects & leadership')
text('MediChina - Multilingual medical-travel concept platform. React, TypeScript, Tailwind CSS.',9,leading=14)
text('GuardianWing - Smart-walker and AI-care interactive concept. HTML, CSS, JavaScript.',9,leading=14)
text('Paper Isle - Reading map for bookstores and libraries, with private local check-ins.',9,leading=14)
text('FingerFight - Canvas typing game with word battles, racing and performance feedback.',9,leading=14)
text('Student Union President, Shanghai University - Led a 70-person team.',9,leading=14)
section('Skills & languages')
text('Python / PyTorch / NumPy; C / C++; SQL; MATLAB / Simulink; Git; LaTeX.',9,leading=14)
text('Mandarin (native); English (working proficiency); French (TCF B1).',9,leading=14)
assert y>34,f'CV overflow: y={y}'
c.setFont('Helvetica',7);c.setFillColor(muted);c.drawString(left,27,'EMILIE CHEN  /  PUBLIC WEB CV');c.drawRightString(right,27,'Updated October 2026')
c.save()
print(f'Created one-page public CV. Bottom content baseline: {y:.1f} pt')
