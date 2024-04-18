document.addEventListener("DOMContentLoaded", function () {
    const agreeAll = document.getElementById("agreeAll");
    const checkboxes = document.querySelectorAll(
        ".agree-options input[type='checkbox']"
    );

    // 전체 동의 클릭 시 각 동의 사항들을 전체 선택 또는 해제
    agreeAll.addEventListener("change", function () {
        checkboxes.forEach(function (checkbox) {
            checkbox.checked = agreeAll.checked;
            updateCheckboxStyle(checkbox);
        });
    });

    // 각 동의 사항들을 선택 시 전체 동의 체크 여부 확인
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", function () {
            const allChecked = Array.from(checkboxes).every(function (cb) {
                return cb.checked;
            });
            agreeAll.checked = allChecked;
            updateCheckboxStyle(checkbox);
        });
    });

    // 체크박스 스타일 업데이트 함수
    function updateCheckboxStyle(checkbox) {
        const label = checkbox.nextElementSibling;
        label.classList.toggle("checked", checkbox.checked);
    }
});

//빨간색
document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((input) => {
        input.addEventListener("blur", function () {
            if (!this.value) {
                this.nextElementSibling.style.display = "inline";
            } else {
                this.nextElementSibling.style.display = "none";
            }
        });
    });

    const confirmPassword = document.getElementById("confirm-password");
    confirmPassword.addEventListener("blur", function () {
        const password = document.getElementById("password").value;
        const confirmMessage = document.getElementById("confirm-message");
        if (password !== this.value) {
            confirmMessage.style.display = "inline";
        } else {
            confirmMessage.style.display = "none";
        }
    });
});