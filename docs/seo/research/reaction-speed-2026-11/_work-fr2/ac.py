import sys, os, io
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "..", "..", "..", "scripts", "keywords"))
import autocomplete as a
sys.stdout.reconfigure(encoding="utf-8")
out = io.open(sys.argv[2], "w", encoding="utf-8")
for t in io.open(sys.argv[1], encoding="utf-8").read().splitlines():
    t = t.strip()
    if not t: continue
    res = a.expand(t, "fr", "fr")
    out.write("## " + t + "\n" + "\n".join(res) + "\n"); out.flush()
