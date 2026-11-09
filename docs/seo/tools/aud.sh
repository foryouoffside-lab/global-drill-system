cd "/c/Users/sangmesh/Desktop/global-drill-system-nextjs - Copy"
for i in 1 2 3 4 5 6; do
  out=$(PYTHONIOENCODING=utf-8 python docs/seo/research/reaction-speed-2026-11/_audit.py "$1")
  case "$out" in FAIL*404*) curl -s -o /dev/null "http://localhost:3000/$1";; *) echo "$out"; exit 0;; esac
done
echo "$out"
