<template>
  <div>
    <Header />
    <Sidebar />
    <Main>
      <Nuxt />
      <div class="flex flex-col mt-10">
        <p class="text-gray-600 text-center text-sm">Bản quyền thuộc Van Lang university &copy; 2021.</p>
        <p class="flex items-center justify-center text-xs text-gray-500">Flipper make with <solid-heart-icon class="ml-1 w-5 h-5 text-red-500 inline-block" /></p>
      </div>
    </Main>
  </div>
</template>

<script>
export default {
  head: {
    bodyAttrs: {
      class: 'bg-gray-100'
    }
  },

  provide() {
    return {
      now: '10-10-2021',
      user: this.$route.query.role === 'student'
        ? {
          name: 'Nguyễn Hồng Hoa',
          avatar: '/student-avatar.jpg',
          role: 'student',
          enrolled: [1, 2]
        } : {
          name: 'Nguyễn Tiến Dũng',
          avatar: '/teacher-avatar.jpg',
          role: 'teacher',
        },
      teachers: [
        {
          id: 1,
          name: 'Nguyễn Tiến Dũng',
          avatar: '/teacher-avatar.jpg',
          description: 'Sống trên đời nên biết mình đang đứng ở vị trí nào, không lớn tuổi hơn ai thì đừng đòi làm cha người khác.'
        },

        {
          id: 2,
          name: 'Lê Chí Huy',
          avatar: '/teacher-avatar.jpg',
          description: 'Đừng cố gắng đánh thức một người đang ngủ say cũng như đừng cố chấp ép người khác phải nghe mình.'
        },

        {
          id: 3,
          name: 'Bùi Nhật Hào',
          avatar: '/teacher-avatar.jpg',
          description: 'Hình hài là ba mẹ cho ta, thế thì tại sao lại vì người khác mà làm tổn hại nó. Có công bằng không?'
        },

        {
          id: 4,
          name: 'Nguyễn Hoàng Tấn',
          avatar: '/teacher-avatar.jpg',
          description: 'Lạc đường không đáng sợ, đáng sợ nhất là không biết mình đi đâu. Khi đã quyết tâm bước, bạn sẽ đến vạch đích cuối cùng thôi'
        }
      ],
      courses: [
        {
          id: 1,
          name: 'Làm quen với Powerpoint',
          description: 'Khóa học thiết kế Slide Powerpoint của sở hữu Giáo án toàn diện, được cải tiến liên tục trong hơn 6 năm từ 2015, giúp học viên nâng tầm tư duy thẩm mỹ thiết kế cùng kĩ năng từ cơ bản.',
          teacherId: 4,
          rating: '5',
          price: '1,200,000đ',
          thumbnail: '/course-1.jpg',
          slots: 40,
          enrolled: 35,
          closedAt: '12-10-2021',
          daysLeft: 2,
          categoryId: 2,
          lessons: 19,
        },

        {
          id: 2,
          name: 'Kỹ năng thuyết trình',
          teacherId: 1,
          rating: '4.5',
          price: '1,000,000đ',
          thumbnail: '/course-2.jpg',
          slots: 40,
          enrolled: 20,
          closedAt: '13-10-2021',
          daysLeft: 3,
          isRecommend: true,
          categoryId: 1,
          lessons: 19,
          description: 'Khóa học Kỹ năng thuyết trình chuyên nghiệp này sẽ trang bị cho bạn lòng tự tin để luôn nắm thế kiểm soát trong bất kỳ tình huống phát sinh nào dù con mắt của cả đám đông đang đổ dồn về phía bạn. Qua khoá học, bạn sẽ tích luỹ được các kiến thức, kỹ năng cần thiết để thoát khỏi lo lắng tự tin trình bày ý tưởng của mình một cách sinh động và lôi cuốn nhất.',
          content:
            'Thuyết trình giờ đây đã trở thành một phần tất yếu trong đời sống hàng ngày của mọi người tại một môi trường làm việc khác nhau. Vấn đề cần quan tâm ở đây là bạn có thực sự hứng thú với công việc này? Và hơn nữa, bạn có thực sự tự tin rằng bạn là một người thuyết trình lôi cuốn, thú vị?' +
            '<br><br>' +
            'Một vài người dường như đã có năng khiếu thuyết trình từ khi lọt lòng mẹ, nhưng đối với số đông còn lại việc đứng lên trước tập thể và trình bày một vấn đề thực sự là một cực hình.' +
            '<br><br>' +
            'Khóa học kỹ năng thuyết trình chuyên nghiệp này sẽ trang bị cho bạn lòng tự tin để luôn nắm thế kiểm soát trong bất kỳ tình huống phát sinh nào dù con mắt của cả đám đông đang đổ dồn về phía bạn. Qua khóa học, bạn sẽ tích luỹ được các kiến thức, kỹ năng cần thiết để thoát khỏi lo lắng tự tin trình bày ý tưởng của mình một cách sinh động và lôi cuốn nhất.',
        },

        {
          id: 3,
          name: 'Làm chủ thời gian của bạn',
          teacherId: 2,
          rating: '5.0',
          price: '1,300,000đ',
          thumbnail: '/course-3.jpg',
          slots: 40,
          enrolled: 40,
          closedAt: '11-10-2021',
          daysLeft: 1,
          isRecommend: true,
          categoryId: 1,
          lessons: 19,
          description: 'Mỗi giây trôi qua không bao giờ lấy lại được, vì vậy trước khi làm việc gì bạn nên có kế hoạch cụ thể để quản lý thời gian một cách khoa học nhất, tránh bị lãng phí thời gian một cách vô bổ. Tuy nhiên nhiều người vẫn phải lo rượt đuổi thời gian do không biết tận dụng, sắp xếp công việc và cuộc sống thế nào cho phù hợp nhất. Vậy thời gian quan trọng thế nào và làm sao để có kỹ năng quản lý thời gian hiệu quả.',
          content: 'Hiện nay, cụm từ mà chúng ta hay được nghe nhiều nhất có lẽ chính là câu: "Tôi bận lắm!" "Tôi không có thời gian, để khi khác nhé!"...' +
            '<br><br>' +
            'Giữa nhịp sống luôn vận động chạy đua với thời gian mỗi giây mỗi phút, với nhiều người việc được ăn một bữa cơm đầm ấm, thong thả trong gia đình còn là điều hiếm hoi chứ đừng nói tới việc dứt ra khỏi công việc để đi du lịch dài ngày, hay ngồi buôn chuyện với bạn bè, người thân...' +
            '<br><br>' +
            'Thế nhưng đó là đối với đại đa số "người bận" mà thôi.' +
            '<br><br>' +
            'Có rất nhiều người tính chất công việc của họ vô cùng bận rộn, hoặc người đảm nhiệm với nhiều vị trí công việc khác nhau; họ thậm chí là quản lý, lãnh đạo, là CEO điều hành một lúc vài doanh nghiệp với mức thu nhập hàng trăm triệu mỗi tháng vẫn có thời gian để dành cho riêng mình đọc sách, cafe thư giãn, vẫn có thời gian tán gẫu gặp mặt bạn bè hay dành thời gian đưa gia đình đi du lịch, nghỉ dưỡng,...' +
            '<br><br>' +
            'Vậy bí quyết của họ là gì? Và làm thế nào để có thể làm được như họ?' +
            '<br><br>' +
            'Chúng ta ai cũng có 24 giờ mỗi ngày, sự khác nhau chỉ là bạn đã sử dụng và sắp xếp thời gian như thế nào mà thôi. Bí quyết của những người thành công ấy chính là biết cách Quản lý thời gian một cách thông minh và hiệu quả!<br>' +
            '<br><br>' +
            'Tham gia khóa học trực tuyến khóa học làm chủ thời gian ngay hôm nay để có thể làm chủ được thời gian của mình và chia sẻ niềm vui cuộc sống với người thân, bạn bè.'
        },

        {
          id: 4,
          name: 'Kỹ năng giao tiếp',
          teacherId: 3,
          rating: '5.0',
          price: '1,500,000đ',
          thumbnail: '/course-4.jpg',
          slots: 40,
          enrolled: 38,
          closedAt: '15-10-2021',
          daysLeft: 5,
          categoryId: 1,
          lessons: 19,
          description: 'Giao tiếp là tập hợp những quy tắc, cách ứng xử, tương tác được đúc kết bằng những kinh nghiệm trong quá trình giao tiếp hằng ngày. Nghệ thuật giao tiếp được xem là một trong những kỹ năng mềm vô cùng quan trọng trong cuộc sống hiện nay. Nó không chỉ làm cầu nối gắn kết mối quan hệ giữa mọi người, mà còn là chìa khóa dẫn lối thành công trong mọi lĩnh vực',
          content: 'Trong công việc cũng như cuộc sống, giao tiếp là một yếu tố không thể thiếu giúp bạn có thể truyền tải thông điệp một cách dễ dàng. Thế nhưng không phải ai cũng biết cách giao tiếp thông minh, hiệu quả với người khác bởi bản thân mỗi chúng ta còn thiếu quá nhiều những kiến thức và kỹ năng cơ bản liên quan đến giao tiếp. Chính điều này đã làm cản trở việc xây dựng các mối quan hệ trong công việc và cuộc sống, khiến bạn trở thành một người rụt rè, tự ti, mờ nhạt. Do đó mà cơ hội thăng tiến trong công việc cũng gặp nhiều khó khăn do ấn tượng ban đầu không tốt cộng với hiệu suất công việc giảm đi nhiều lần.' +
            '<br><br>' +
            'Và Khóa học giao tiếp sẽ giúp bạn mở thêm nhiều mối quan hệ một cách thông minh, tinh tế, làm tăng giá trị sâu sắc hay tạo sự hấp dẫn cho chính bản thân bạn trong tất cả các cuộc giao tiếp, khiến đối phương phải cảm thấy hấp dẫn, thú vị cũng như nể phục.'
        },

        {
          id: 5,
          name: 'Kỹ năng dạy online',
          teacherId: 1,
          rating: '4.8',
          price: '800,000đ',
          thumbnail: '/course-5.jpg',
          slots: 40,
          enrolled: 15,
          closedAt: '15-10-2021',
          daysLeft: 5,
          categoryId: 1,
          lessons: 19,
        },

        {
          id: 6,
          name: 'Nhập môn Office 365',
          teacherId: 2,
          rating: '4.9',
          price: '3,000,000đ',
          thumbnail: '/course-5.jpg',
          slots: 40,
          enrolled: 3,
          closedAt: '16-10-2021',
          daysLeft: 6,
          categoryId: 2,
          lessons: 19,
          description: 'Bạn là người đi làm văn phòng và cần sử dụng thường xuyên bộ Office? Hãy tham gia khóa học này để nắm bắt kiến thức và làm chủ bộ Office 365 đầy mới mẻ. Với những buổi học hướng dẫn từng bước từ cơ bản, cách cài đặt, gõ chữ, trình bày văn bản, cho đến chia ô, chia cột và trình bày khung, bảng tính .v.v.',
          content: 'Tin học văn phòng là một kỹ năng thiết yếu cho mọi người hiện nay. Nó đã trở thành một tiêu chuẩn tuyển dụng ở nhiều công ty, đặc biệt những vị trí Nhân viên văn phòng, cần xử lý công việc giấy tờ, máy tính, thuyết trình…..Office 365 là công cụ soạn thảo văn bản thông dụng mà hầu hết các doanh nghiệp và cá nhân đang sử dụng. Nó là một trong những kỹ năng mà bạn cần nắm vững để xử lý mọi vấn đề liên quan. Tuy nhiên, rất nhiều người dùng chỉ sử dụng được tối đa 5% các tính năng có sẵn của nó, điều này dẫn đến hiệu quả công việc đạt được là không cao.' +
            '<br><br>' +
            'Bạn đang có nhu cầu tìm hiểu về Office 365 để nâng cao hiệu quả công việc ?' +
            '<br><br>' +
            'Hay bạn đang luyện thi chứng chỉ tin học văn phòng để tăng khả năng cạnh tranh cho bản thân…. ?' +
            '<br><br>' +
            'Bạn hoàn toàn có thể tự tin và thành thạo với Office 365.' +
            '<br><br>' +
            'Một tài liệu được trình bày rõ ràng, đẹp mắt sẽ giúp bạn ghi điểm trong mắt khách hàng, đối tác, nhà tuyển dụng. Tất cả những gì bạn cần là tham gia khóa học nhập môn office 365 từ cơ bản đến nâng cao. Chỉ sau 1 khoá học, bạn sẽ thấy kỹ năng soạn thảo office của mình thay đổi vượt bậc.'
        },

        {
          id: 7,
          name: 'Excel cho người mới bắt đầu',
          teacherId: 3,
          rating: '4.5',
          price: '1,500,000đ',
          thumbnail: '/course-7.jpg',
          slots: 40,
          enrolled: 30,
          closedAt: '14-10-2021',
          daysLeft: 4,
          categoryId: 2,
          lessons: 19,
        },

        {
          id: 8,
          name: 'Task list với OneNote',
          teacherId: 4,
          rating: '4.7',
          price: '500,000đ',
          thumbnail: '/course-8.jpg',
          slots: 40,
          enrolled: 25,
          closedAt: '14-10-2021',
          daysLeft: 4,
          categoryId: 2,
          lessons: 6,
          roadmap: [
            {
              name: 'Phần 1: Tổng quan',
              lessons: [
                {
                  name: 'Bài 1: Giới thiệu',
                },
                {
                  name: 'Bài 2: Cài đặt',
                  resources: [
                    'OneNote.exe',
                    'OneNote.dmg'
                  ]
                }
              ]
            },

            {
              name: 'Phần 2: Cơ bản',
              lessons: [
                {
                  name: 'Bài 3: Đăng nhập tài khoản',
                },
                {
                  name: 'Bài 4: Tạo note cơ bản',
                }
              ]
            },

            {
              name: 'Phần 3: Nâng cao',
              lessons: [
                {
                  name: 'Bài 5: Tạo to-do list',
                },
                {
                  name: 'Bài 6: Cấu hình nâng cao',
                }
              ]
            }
          ]
        }
      ],
      categories: [
        {
          id: 1,
          name: 'Kỹ năng mềm'
        },
        {
          id: 2,
          name: 'Office'
        }
      ]
    }
  }
}
</script>
