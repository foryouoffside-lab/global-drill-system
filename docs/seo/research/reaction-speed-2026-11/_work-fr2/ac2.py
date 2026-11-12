import sys, os, io, time
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "..", "..", "..", "..", "scripts", "keywords"))
import autocomplete as a
out = io.open(sys.argv[2], "a", encoding="utf-8")
for t in io.open(sys.argv[1], encoding="utf-8").read().splitlines():
    if not t.strip(): continue
    out.write("## " + t + " (single call)\n" + "\n".join(a.suggest(t, "fr", "fr")) + "\n"); time.sleep(1)
