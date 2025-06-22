import React, { useState } from "react";

// Пример списка регионов и городов (можно расширять)
const regionsList = [
    {
        region: "Московская обл.",
        city: "Москва",
    },
    {
        region: "Московская обл.",
        city: "Абрамцево",
    },
    {
        region: "Московская обл.",
        city: "Алабино",
    },
    {
        region: "Московская обл.",
        city: "Апрелевка",
    },
    {
        region: "Московская обл.",
        city: "Архангельское",
    },
    {
        region: "Московская обл.",
        city: "Ашитково",
    },
    {
        region: "Московская обл.",
        city: "Бакшеево",
    },
    {
        region: "Московская обл.",
        city: "Балашиха",
    },
    {
        region: "Московская обл.",
        city: "Барыбино",
    },
    {
        region: "Московская обл.",
        city: "Белоозёрский",
    },
    {
        region: "Московская обл.",
        city: "Белоомут",
    },
    {
        region: "Московская обл.",
        city: "Белые Столбы",
    },
    {
        region: "Московская обл.",
        city: "Бородино",
    },
    {
        region: "Московская обл.",
        city: "Бронницы",
    },
    {
        region: "Московская обл.",
        city: "Быково",
    },
    {
        region: "Московская обл.",
        city: "Ватутинки",
    },
    {
        region: "Московская обл.",
        city: "Вербилки",
    },
    {
        region: "Московская обл.",
        city: "Верея",
    },
    {
        region: "Московская обл.",
        city: "Видное",
    },
    {
        region: "Московская обл.",
        city: "Волоколамск",
    },
    {
        region: "Московская обл.",
        city: "Воскресенск",
    },
    {
        region: "Московская обл.",
        city: "Высоковск",
    },
    {
        region: "Московская обл.",
        city: "Голицыно",
    },
    {
        region: "Московская обл.",
        city: "Дедовск",
    },
    {
        region: "Московская обл.",
        city: "Дзержинский",
    },
    {
        region: "Московская обл.",
        city: "Дмитров",
    },
    {
        region: "Московская обл.",
        city: "Долгопрудный",
    },
    {
        region: "Московская обл.",
        city: "Домодедово",
    },
    {
        region: "Московская обл.",
        city: "Дорохово",
    },
    {
        region: "Московская обл.",
        city: "Дрезна",
    },
    {
        region: "Московская обл.",
        city: "Дубна",
    },
    {
        region: "Московская обл.",
        city: "Егорьевск",
    },
    {
        region: "Московская обл.",
        city: "Железнодорожный",
    },
    {
        region: "Московская обл.",
        city: "Жуковский",
    },
    {
        region: "Московская обл.",
        city: "Запрудня",
    },
    {
        region: "Московская обл.",
        city: "Зарайск",
    },
    {
        region: "Московская обл.",
        city: "Звенигород",
    },
    {
        region: "Московская обл.",
        city: "Ивантеевка",
    },
    {
        region: "Московская обл.",
        city: "Истра",
    },
    {
        region: "Московская обл.",
        city: "Кашира",
    },
    {
        region: "Московская обл.",
        city: "Климовск",
    },
    {
        region: "Московская обл.",
        city: "Клин",
    },
    {
        region: "Московская обл.",
        city: "Коломна",
    },
    {
        region: "Московская обл.",
        city: "Королёв",
    },
    {
        region: "Московская обл.",
        city: "Котельники",
    },
    {
        region: "Московская обл.",
        city: "Красноармейск",
    },
    {
        region: "Московская обл.",
        city: "Красногорск",
    },
    {
        region: "Московская обл.",
        city: "Краснозаводск",
    },
    {
        region: "Московская обл.",
        city: "Краснознаменск",
    },
    {
        region: "Московская обл.",
        city: "Кубинка",
    },
    {
        region: "Московская обл.",
        city: "Куровское",
    },
    {
        region: "Московская обл.",
        city: "Ликино-Дулёво",
    },
    {
        region: "Московская обл.",
        city: "Лобня",
    },
    {
        region: "Московская обл.",
        city: "Лосино-Петровский",
    },
    {
        region: "Московская обл.",
        city: "Лотошино",
    },
    {
        region: "Московская обл.",
        city: "Луховицы",
    },
    {
        region: "Московская обл.",
        city: "Лыткарино",
    },
    {
        region: "Московская обл.",
        city: "Люберцы",
    },
    {
        region: "Московская обл.",
        city: "Можайск",
    },
    {
        region: "Московская обл.",
        city: "Монино",
    },
    {
        region: "Московская обл.",
        city: "Мытищи",
    },
    {
        region: "Московская обл.",
        city: "Наро-Фоминск",
    },
    {
        region: "Московская обл.",
        city: "Ногинск",
    },
    {
        region: "Московская обл.",
        city: "Одинцово",
    },
    {
        region: "Московская обл.",
        city: "Ожерелье",
    },
    {
        region: "Московская обл.",
        city: "Озёры",
    },
    {
        region: "Московская обл.",
        city: "Орехово-Зуево",
    },
    {
        region: "Московская обл.",
        city: "Павловский Посад",
    },
    {
        region: "Московская обл.",
        city: "Пересвет",
    },
    {
        region: "Московская обл.",
        city: "Подольск",
    },
    {
        region: "Московская обл.",
        city: "Протвино",
    },
    {
        region: "Московская обл.",
        city: "Пушкино",
    },
    {
        region: "Московская обл.",
        city: "Пущино",
    },
    {
        region: "Московская обл.",
        city: "Раменское",
    },
    {
        region: "Московская обл.",
        city: "Реутов",
    },
    {
        region: "Московская обл.",
        city: "Рошаль",
    },
    {
        region: "Московская обл.",
        city: "Руза",
    },
    {
        region: "Московская обл.",
        city: "Сергиев Посад",
    },
    {
        region: "Московская обл.",
        city: "Серпухов",
    },
    {
        region: "Московская обл.",
        city: "Солнечногорск",
    },
    {
        region: "Московская обл.",
        city: "Старая Купавна",
    },
    {
        region: "Московская обл.",
        city: "Ступино",
    },
    {
        region: "Московская обл.",
        city: "Талдом",
    },
    {
        region: "Московская обл.",
        city: "Троицк",
    },
    {
        region: "Московская обл.",
        city: "Фрязино",
    },
    {
        region: "Московская обл.",
        city: "Химки",
    },
    {
        region: "Московская обл.",
        city: "Хотьково",
    },
    {
        region: "Московская обл.",
        city: "Черноголовка",
    },
    {
        region: "Московская обл.",
        city: "Чехов",
    },
    {
        region: "Московская обл.",
        city: "Шатура",
    },
    {
        region: "Московская обл.",
        city: "Щёлково",
    },
    {
        region: "Московская обл.",
        city: "Электрогорск",
    },
    {
        region: "Московская обл.",
        city: "Электросталь",
    },
    {
        region: "Московская обл.",
        city: "Электроугли",
    },
    {
        region: "Московская обл.",
        city: "Яхрома",
    },
    {
        region: "Ленинградская обл.",
        city: "Санкт-Петербург",
    },
    {
        region: "Ленинградская обл.",
        city: "Бокситогорск",
    },
    {
        region: "Ленинградская обл.",
        city: "Волосово",
    },
    {
        region: "Ленинградская обл.",
        city: "Волхов",
    },
    {
        region: "Ленинградская обл.",
        city: "Всеволожск",
    },
    {
        region: "Ленинградская обл.",
        city: "Выборг",
    },
    {
        region: "Ленинградская обл.",
        city: "Высоцк",
    },
    {
        region: "Ленинградская обл.",
        city: "Гатчина",
    },
    {
        region: "Ленинградская обл.",
        city: "Ивангород",
    },
    {
        region: "Ленинградская обл.",
        city: "Каменногорск",
    },
    {
        region: "Ленинградская обл.",
        city: "Кингисепп",
    },
    {
        region: "Ленинградская обл.",
        city: "Кириши",
    },
    {
        region: "Ленинградская обл.",
        city: "Кировск",
    },
    {
        region: "Ленинградская обл.",
        city: "Коммунар",
    },
    {
        region: "Ленинградская обл.",
        city: "Лодейное Поле",
    },
    {
        region: "Ленинградская обл.",
        city: "Луга",
    },
    {
        region: "Ленинградская обл.",
        city: "Любань",
    },
    {
        region: "Ленинградская обл.",
        city: "Мурино",
    },
    {
        region: "Ленинградская обл.",
        city: "Никольское",
    },
    {
        region: "Ленинградская обл.",
        city: "Новая Ладога",
    },
    {
        region: "Ленинградская обл.",
        city: "Отрадное",
    },
    {
        region: "Ленинградская обл.",
        city: "Пикалёво",
    },
    {
        region: "Ленинградская обл.",
        city: "Подпорожье",
    },
    {
        region: "Ленинградская обл.",
        city: "Приморск",
    },
    {
        region: "Ленинградская обл.",
        city: "Приозерск",
    },
    {
        region: "Ленинградская обл.",
        city: "Светогорск",
    },
    {
        region: "Ленинградская обл.",
        city: "Сертолово",
    },
    {
        region: "Ленинградская обл.",
        city: "Сланцы",
    },
    {
        region: "Ленинградская обл.",
        city: "Сосновый Бор",
    },
    {
        region: "Ленинградская обл.",
        city: "Сясьстрой",
    },
    {
        region: "Ленинградская обл.",
        city: "Тихвин",
    },
    {
        region: "Ленинградская обл.",
        city: "Тосно",
    },
    {
        region: "Ленинградская обл.",
        city: "Шлиссельбург",
    },
];

const uniqueRegions = Array.from(new Set(regionsList.map((item) => item.region)));

export default function Form() {
  // Состояния для "Где вы живете"
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  // Состояния для "Куда хотите переехать"
  const [targetRegion, setTargetRegion] = useState("");
  const [targetCity, setTargetCity] = useState("");
  // О вас
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  // Хронические заболевания
  const [diseases, setDiseases] = useState({
    heart: false,
    skin: false,
    lungs: false,
    allergy: false,
  });
  // Сообщение об отправке
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Состояния для отслеживания статуса задачи
  const [taskId, setTaskId] = useState(null);
  const [taskResult, setTaskResult] = useState(null);
  const [taskStatus, setTaskStatus] = useState(null);

  // Фильтрация городов по региону
  const getCities = (selectedRegion) =>
    regionsList.filter((item) => item.region === selectedRegion).map((item) => item.city);

  // Обработка чекбоксов
  const handleDiseaseChange = (e) => {
    setDiseases({ ...diseases, [e.target.name]: e.target.checked });
  };

  // Отправка формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("Отправка...");
    setTaskId(null);
    setTaskResult(null);
    
    const data = {
      region,
      city,
      targetRegion,
      targetCity,
      age,
      gender,
      diseases,
    };
    
    try {
      const response = await fetch(
        "https://mashusha.app.n8n.cloud/webhook-test/form-submit",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );
      
      console.log("Ответ от первого webhook:", response.status);
      
      if (response.ok) {
        const responseText = await response.text();
        
        if (responseText && responseText.trim() !== "") {
          try {
            const result = JSON.parse(responseText);
            const taskData = Array.isArray(result) ? result[0] : result;
            
            if (taskData && taskData.id) {
              const cleanId = taskData.id;
              setTaskId(cleanId);
              console.log("Получен ID задачи:", cleanId);
              
              // Сохраняем статус если он есть
              if (taskData.status) {
                setTaskStatus(taskData.status);
                console.log("Получен статус задачи:", taskData.status);
              }
              
              setStatus("Данные отправлены! Обрабатываем...");
            } else {
              console.log("ID задачи не найден в ответе");
              setStatus("Данные отправлены! (без ID для отслеживания)");
            }
          } catch (parseError) {
            setStatus(`Данные отправлены! (ответ не в JSON формате: ${responseText})`);
          }
        } else {
          setStatus("Данные отправлены! (пустой ответ)");
        }
      } else {
        const errorText = await response.text();
        setStatus(`Ошибка при отправке (${response.status}). Попробуйте ещё раз.`);
      }
    } catch (error) {
      setStatus("Ошибка сети. Попробуйте ещё раз.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Функция для проверки статуса
  const checkStatus = async () => {
    if (!taskId) return;
    
    try {
      setStatus("Проверяем статус...");
      
      console.log("Отправляем на второй webhook - ID:", taskId);
      
      const response = await fetch(
        `https://mashusha.app.n8n.cloud/webhook-test/form-status?id=${encodeURIComponent(taskId)}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("Ответ от второго webhook:", response.status);

      if (response.ok) {
        const responseText = await response.text();
        console.log("Текст ответа от второго webhook:", responseText);
        
        if (responseText && responseText.trim() !== "") {
          try {
            const result = JSON.parse(responseText);
            const statusData = Array.isArray(result) ? result[0] : result;
            
            if (statusData && statusData.status) {
              if (statusData.status === "ready") {
                if (statusData.answer) {
                  const cleanAnswer = statusData.answer
                    .replace(/##/g, '')
                    .replace(/\*\*/g, '')
                    .replace(/\*/g, '')
                    .replace(/`/g, '')
                    .replace(/#/g, '')
                    .trim();
                  
                  setTaskResult(cleanAnswer);
                  setStatus("✅ Анализ готов!");
                } else {
                  setTaskResult("Анализ готов, но ответ пустой");
                  setStatus("✅ Анализ готов!");
                }
              } else if (statusData.status === "in progress") {
                setStatus("Данные скоро придут");
              } else {
                setStatus(`Статус: ${statusData.status}`);
              }
            } else {
              setStatus("Статус не определен");
            }
          } catch (parseError) {
            setStatus("Ошибка при обработке ответа");
          }
        } else {
          setStatus("Пустой ответ от сервера");
        }
      } else {
        const errorText = await response.text();
        console.log("Ошибка второго webhook:", errorText);
        setStatus(`Ошибка при проверке статуса (${response.status})`);
      }
    } catch (error) {
      console.log("Ошибка сети второго webhook:", error);
      setStatus("Ошибка сети при проверке статуса");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Форма для анализа переезда</h1>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "20px" }}>
          <h3>Где вы живете:</h3>
          <div style={{ marginBottom: "10px" }}>
            <label>Регион:</label>
            <select 
              value={region} 
              onChange={(e) => {
                setRegion(e.target.value);
                setCity("");
              }}
              required
              style={{ marginLeft: "10px", padding: "5px" }}
            >
              <option value="">Выберите регион</option>
              {uniqueRegions.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
          
          <div style={{ marginBottom: "10px" }}>
            <label>Город:</label>
            <select 
              value={city} 
              onChange={(e) => setCity(e.target.value)}
              required
              disabled={!region}
              style={{ marginLeft: "10px", padding: "5px" }}
            >
              <option value="">Выберите город</option>
              {region && getCities(region).map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3>Куда хотите переехать:</h3>
          <div style={{ marginBottom: "10px" }}>
            <label>Регион:</label>
            <select 
              value={targetRegion} 
              onChange={(e) => {
                setTargetRegion(e.target.value);
                setTargetCity("");
              }}
              required
              style={{ marginLeft: "10px", padding: "5px" }}
            >
              <option value="">Выберите регион</option>
              {uniqueRegions.map((r) => (
                <option key={r} value={r}>{r}</option>
              ))}
            </select>
          </div>
          
          <div style={{ marginBottom: "10px" }}>
            <label>Город:</label>
            <select 
              value={targetCity} 
              onChange={(e) => setTargetCity(e.target.value)}
              required
              disabled={!targetRegion}
              style={{ marginLeft: "10px", padding: "5px" }}
            >
              <option value="">Выберите город</option>
              {targetRegion && getCities(targetRegion).map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3>О вас:</h3>
          <div style={{ marginBottom: "10px" }}>
            <label>Возраст:</label>
            <input 
              type="number" 
              value={age} 
              onChange={(e) => setAge(e.target.value)}
              required
              min="1"
              max="120"
              style={{ marginLeft: "10px", padding: "5px" }}
            />
          </div>
          
          <div style={{ marginBottom: "10px" }}>
            <label>Пол:</label>
            <select 
              value={gender} 
              onChange={(e) => setGender(e.target.value)}
              required
              style={{ marginLeft: "10px", padding: "5px" }}
            >
              <option value="">Выберите пол</option>
              <option value="male">Мужской</option>
              <option value="female">Женский</option>
            </select>
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <h3>Хронические заболевания:</h3>
          <div style={{ marginBottom: "5px" }}>
            <input 
              type="checkbox" 
              name="heart" 
              checked={diseases.heart} 
              onChange={handleDiseaseChange}
            />
            <label style={{ marginLeft: "5px" }}>Сердечно-сосудистые</label>
          </div>
          <div style={{ marginBottom: "5px" }}>
            <input 
              type="checkbox" 
              name="skin" 
              checked={diseases.skin} 
              onChange={handleDiseaseChange}
            />
            <label style={{ marginLeft: "5px" }}>Кожные</label>
          </div>
          <div style={{ marginBottom: "5px" }}>
            <input 
              type="checkbox" 
              name="lungs" 
              checked={diseases.lungs} 
              onChange={handleDiseaseChange}
            />
            <label style={{ marginLeft: "5px" }}>Легочные</label>
          </div>
          <div style={{ marginBottom: "5px" }}>
            <input 
              type="checkbox" 
              name="allergy" 
              checked={diseases.allergy} 
              onChange={handleDiseaseChange}
            />
            <label style={{ marginLeft: "5px" }}>Аллергия</label>
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          style={{ 
            padding: "10px 20px", 
            backgroundColor: "#007bff", 
            color: "white", 
            border: "none", 
            borderRadius: "4px", 
            cursor: "pointer",
            marginRight: "10px"
          }}
        >
          {isSubmitting ? "Отправляем..." : "Отправить"}
        </button>
      </form>

      {status && (
        <div style={{ marginTop: "20px", padding: "10px", backgroundColor: "#f8f9fa", borderRadius: "4px" }}>
          <strong>Статус:</strong> {status}
        </div>
      )}

      {taskId && (
        <div style={{ marginTop: "20px" }}>
          <button 
            onClick={checkStatus}
            style={{
              padding: "8px 16px",
              backgroundColor: "#28a745",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer"
            }}
          >
            Проверить статус
          </button>
        </div>
      )}

      {taskResult && (
        <div style={{ 
          marginTop: "20px", 
          padding: "15px", 
          backgroundColor: "#d4edda", 
          border: "1px solid #c3e6cb",
          borderRadius: "4px"
        }}>
          <h3>Результат анализа:</h3>
          <div style={{ whiteSpace: "pre-wrap" }}>{taskResult}</div>
        </div>
      )}
    </div>
  );
} 