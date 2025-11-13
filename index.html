<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Feedback</title>
<style>
  :root{
    --bg: #0f172a;           /* slate-900 */
    --card: #111827ee;       /* gray-900 w/alpha */
    --text: #e5e7eb;         /* gray-200 */
    --muted:#9ca3af;         /* gray-400 */
    --brand:#60a5fa;         /* blue-400 */
    --brand-2:#34d399;       /* emerald-400 */
    --danger:#ef4444;        /* red-500 */
    --ring:#2563eb55;        /* blue-600 alpha */
    color-scheme: dark;
  }
  *{box-sizing:border-box}
  body{
    margin:0; min-height:100dvh; display:grid; place-items:center;
    background:
      radial-gradient(1000px 600px at 10% -10%, #1e293b, transparent 70%),
      radial-gradient(900px 500px at 110% 10%, #0b1220, transparent 60%),
      linear-gradient(160deg, #0b1220, #0f172a 40%, #0b1220);
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji","Segoe UI Emoji";
    color:var(--text);
    padding:24px;
  }
  .card{
    width:min(680px, 96vw);
    background:linear-gradient(180deg, #0b1220cc, #111827f0);
    border:1px solid #1f2937;
    border-radius:20px;
    padding:28px;
    box-shadow:
      0 20px 50px rgba(0,0,0,.55),
      inset 0 1px 0 rgba(255,255,255,.03);
    backdrop-filter: blur(6px);
  }
  h1{font-size:clamp(1.25rem, 2vw, 1.5rem); margin:0 0 8px}
  .sub{color:var(--muted); margin:0 0 20px; font-size:.95rem}
  form{display:grid; gap:14px}
  .row{display:grid; gap:14px; grid-template-columns:1fr 1fr}
  @media (max-width:720px){ .row{grid-template-columns:1fr} }
  label{font-size:.9rem; color:var(--muted); display:block; margin-bottom:6px}
  input[type="text"], input[type="email"], textarea{
    width:100%; color:var(--text); background:#0b1220;
    border:1px solid #1f2937; border-radius:12px; padding:12px 14px;
    outline:none; transition:.15s border-color, .15s box-shadow, .15s transform;
  }
  input:focus, textarea:focus{
    border-color: var(--brand);
    box-shadow: 0 0 0 4px var(--ring);
  }
  textarea{min-height:120px; resize:vertical}
  .req::after{content:" *"; color:var(--brand)}
  /* Star rating */
  .stars{display:flex; gap:4px; direction:rtl}
  .stars input{display:none}
  .stars label{
    font-size:1.6rem; line-height:1; cursor:pointer; user-select:none;
    color:#475569; transition: transform .05s ease, color .15s ease;
    filter: drop-shadow(0 1px 0 #000);
  }
  .stars label:hover,
  .stars label:hover ~ label{ color:#fbbf24 } /* amber-400 on hover */
  .stars input:checked ~ label{ color:#f59e0b } /* amber-500 checked */
  .notice{
    border:1px solid #1f2937; background:#0b1220; padding:12px 14px;
    border-radius:12px; display:none; align-items:flex-start; gap:10px;
    font-size:.95rem;
  }
  .notice.show{display:flex}
  .notice svg{flex:0 0 20px; margin-top:2px}
  .notice.ok{border-color:#064e3b; background:rgba(5, 46, 22, .35)}
  .notice.ok path{fill:var(--brand-2)}
  .notice.err{border-color:#7f1d1d; background:rgba(67, 11, 11, .35)}
  .notice.err path{fill:var(--danger)}
  .actions{display:flex; justify-content:flex-end; margin-top:4px}
  button{
    appearance:none; border:0; border-radius:12px;
    padding:12px 16px; font-weight:600; cursor:pointer;
    color:#0b1220; background: linear-gradient(180deg, #93c5fd, #60a5fa);
    box-shadow: 0 10px 20px rgba(96,165,250,.25), inset 0 1px 0 rgba(255,255,255,.5);
    transition: transform .06s ease, filter .15s ease;
  }
  button:hover{filter:brightness(1.05)}
  button:active{transform:translateY(1px)}
  button[disabled]{opacity:.6; cursor:not-allowed; filter:grayscale(.15)}
  .spinner{
    width:16px;height:16px;border-radius:50%;
    border:2px solid #0b1220;border-right-color:transparent;display:inline-block;
    vertical-align:-3px;margin-right:8px; animation:spin .7s linear infinite
  }
  @keyframes spin{to{transform:rotate(360deg)}}
  .foot{margin-top:10px; font-size:.85rem; color:var(--muted)}
</style>
</head>
<body>
  <main class="card">
    <h1>Share your feedback</h1>
    <p class="sub">We’d love to hear what you think. Your response is stored securely.</p>

    <div id="notice" class="notice" role="status" aria-live="polite"></div>

    <form id="fb" onsubmit="return sendFb(event)" novalidate>
      <div class="row">
        <div>
          <label for="name">Name (optional)</label>
          <input id="name" name="name" type="text" placeholder="Anoop K V" autocomplete="name"/>
        </div>
        <div>
          <label for="email" class="req">Email</label>
          <input id="email" name="email" type="email" required placeholder="you@example.com" autocomplete="email"/>
        </div>
      </div>

      <div class="row">
        <div>
          <label class="req">Rating</label>
          <div class="stars" id="rating">
            <!-- 5..1 (RTL) so hovering fills leftwards -->
            <input type="radio" id="star5" name="rating" value="5" required>
            <label for="star5" aria-label="5 stars">★</label>
            <input type="radio" id="star4" name="rating" value="4">
            <label for="star4" aria-label="4 stars">★</label>
            <input type="radio" id="star3" name="rating" value="3">
            <label for="star3" aria-label="3 stars">★</label>
            <input type="radio" id="star2" name="rating" value="2">
            <label for="star2" aria-label="2 stars">★</label>
            <input type="radio" id="star1" name="rating" value="1">
            <label for="star1" aria-label="1 star">★</label>
          </div>
        </div>
        <div>
          <label for="comments" class="req">Comments</label>
          <textarea id="comments" name="comments" required placeholder="Tell us what worked well or what we can improve…" maxlength="1000"></textarea>
        </div>
      </div>

      <div class="actions">
        <button id="submitBtn" type="submit">
          <span id="btnText">Submit</span>
        </button>
      </div>
      <p class="foot">By submitting, you consent to us storing your feedback to improve our services.</p>
    </form>
  </main>

<script>
const notice = document.getElementById('notice');
const btn = document.getElementById('submitBtn');
const btnText = document.getElementById('btnText');
const form = document.getElementById('fb');

function showNotice(type, message){
  notice.className = `notice show ${type}`;
  notice.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path d="${type==='ok'
        ? 'M9 16.2l-3.5-3.5L4 14.2 9 19l11-11-1.5-1.5L9 16.2z'
        : 'M11 7h2v6h-2V7zm0 8h2v2h-2v-2zm1-13C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z'}"></path>
    </svg>
    <div>${message}</div>
  `;
}

function setLoading(state){
  if (state){
    btn.disabled = true;
    btn.innerHTML = '<span class="spinner"></span>Sending…';
  } else {
    btn.disabled = false;
    btn.innerHTML = '<span id="btnText">Submit</span>';
  }
}

function validate(){
  // Native validation + ensure rating chosen
  if (!form.reportValidity()) return false;
  const rating = new FormData(form).get('rating');
  if (!rating){ showNotice('err', 'Please select a rating.'); return false; }
  return true;
}

async function sendFb(e){
  e.preventDefault();
  if (!validate()) return false;

  setLoading(true);
  notice.classList.remove('show');

  try{
    const data = Object.fromEntries(new FormData(form));
    const res = await fetch('/api/submit-feedback', {
      method:'POST',
      headers:{ 'Content-Type':'application/json' },
      body: JSON.stringify(data)
    });

    // Prefer JSON, but gracefully handle text/empty
    let msg = 'Thanks for your feedback!';
    const ct = res.headers.get('content-type') || '';
    if (ct.includes('application/json')){
      const j = await res.json().catch(()=> ({}));
      msg = j.message || j.detail || msg;
    } else {
      const t = (await res.text()).trim();
      if (t) msg = t;
    }

    if (res.ok){
      showNotice('ok', msg);
      form.reset();
      // Uncheck stars explicitly
      document.querySelectorAll('.stars input:checked').forEach(i => i.checked=false);
    } else {
      showNotice('err', `Submission failed (${res.status}). ${msg}`);
    }
  } catch(err){
    showNotice('err', 'Network error. Please try again.');
  } finally {
    setLoading(false);
  }
  return false;
}
</script>
</body>
</html>
