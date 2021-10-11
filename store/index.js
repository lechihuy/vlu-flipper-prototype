export const state = () => ({
  user: null,
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
      teacherId: 4,
      rating: '5',
      price: '1,200,000đ',
      thumbnail: '/course-1.jpg',
      slots: 40,
      enrolled: 35,
      closedAt: '12-10-2021',
      daysLeft: 2,
      categoryId: 2,
      description: 'Với PowerPoint bạn có thể trình bày nhiều nội dung trình chiếu, với các công cụ hỗ trợ tạo slide như các hiệu ứng động trên slide. Với những người mới sử dụng PowerPoint thì các bước cơ bản tạo slide nội dung là điều cần thiết phải nắm rõ, sau đó mới có thể áp dụng những nội dung chỉnh sửa slide nâng cao hơn',
      content: 'PowerPoint là một chương trình trình chiếu cho phép bạn tạo các bản trình chiếu động. Những bản trình bày này có thể bao gồm hoạt ảnh, tường thuật, hình ảnh, video và nhiều hơn thế nữa. Trong bài học này, bạn sẽ tìm hiểu học và làm quen với giao diện của PowerPoint bao gồm thanh Ribbon, thanh công cụ truy nhập nhanh (Quick Access Toolbar) và dạng Backstage view. Các quy trình trong hướng dẫn này sẽ hoạt động cho tất cả các phiên bản Microsoft PowerPoint gần đây, bao gồm PowerPoint 2019, PowerPoint 2016 và Office 365. Có thể có một số khác biệt nhỏ, nhưng phần lớn các phiên bản này tương tự nhau. Tuy nhiên, nếu bạn đang sử dụng phiên bản cũ hơn, bạn có thể sẽ mất 1 khoảng thời gian nhỏ để làm quen.' +
        '<br><br>' +
        'PowerPoint 2010 xây dựng Ribbon có các nút lệnh đồ họa dễ nhận biết được chia thành nhiều Tab (ngăn) thay cho hệ thống thực đơn xổ xuống trước đây. Mỗi tab giống như một thanh công cụ với các nút lệnh và danh sách lệnh cho người dùng lựa chọn sử dụng. Nhưng PowerPoint 2010 có thêm một thanh công cụ gọi là Quick Access Toolbar (QAT - thanh công cụ truy cập nhanh) giúp người dùng có thể tùy biến và gắn thêm các nút lệnh thường dùng một cách nhanh chóng và dễ dàng. Bạn có thể thêm vào QAT bất kỳ nút lệnh nào bằng cách nhấp phải chuột vào nó và chọn Add to Quick Access Toolbar.',
      lessons: 8,
      roadmap: [
        {
          name: 'Phần 1: Tổng quan về Powerpoint',
          lessons: [
            {
              name: 'Bài 1: Giới thiệu Powerpoint',
            },
            {
              name: 'Bài 2: Hướng dẫn cơ bản Powerpoint',
            }
          ]
        },

        {
          name: 'Phần 2:Thực hành tổng quan',
          lessons: [
            {
              name: 'Bài 3: Chọn theme slide PowerPoint',
            },
            {
              name: 'Bài 4: Thêm slide mới trong PowerPoint',
            },
            {
              name: 'Bài 5: Thêm nội dung trong slide',
            },
            {
              name: 'Bài 6: Định dạng văn bản trên slide',
              resources: [
                'PowerPoint1.pdf',
                'PowerPoint2.pdf'
              ]
            },
          ]
        },
        {
          name: 'Phần 3: Tổng kết, đánh giá',
          lessons: [
            {
              name: 'Bài 7: Thực hành Powerpoint'
            },
            {
              name: 'Bài 8: Tổng kết',
            }
          ]
        }
      ]
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
      description: 'Khóa học Kỹ năng thuyết trình chuyên nghiệp này sẽ trang bị cho bạn lòng tự tin để luôn nắm thế kiểm soát trong bất kỳ tình huống phát sinh nào dù con mắt của cả đám đông đang đổ dồn về phía bạn. Qua khoá học, bạn sẽ tích luỹ được các kiến thức, kỹ năng cần thiết để thoát khỏi lo lắng tự tin trình bày ý tưởng của mình một cách sinh động và lôi cuốn nhất.',
      content:
        'Thuyết trình giờ đây đã trở thành một phần tất yếu trong đời sống hàng ngày của mọi người tại một môi trường làm việc khác nhau. Vấn đề cần quan tâm ở đây là bạn có thực sự hứng thú với công việc này? Và hơn nữa, bạn có thực sự tự tin rằng bạn là một người thuyết trình lôi cuốn, thú vị?' +
        '<br><br>' +
        'Một vài người dường như đã có năng khiếu thuyết trình từ khi lọt lòng mẹ, nhưng đối với số đông còn lại việc đứng lên trước tập thể và trình bày một vấn đề thực sự là một cực hình.' +
        '<br><br>' +
        'Khóa học kỹ năng thuyết trình chuyên nghiệp này sẽ trang bị cho bạn lòng tự tin để luôn nắm thế kiểm soát trong bất kỳ tình huống phát sinh nào dù con mắt của cả đám đông đang đổ dồn về phía bạn. Qua khóa học, bạn sẽ tích luỹ được các kiến thức, kỹ năng cần thiết để thoát khỏi lo lắng tự tin trình bày ý tưởng của mình một cách sinh động và lôi cuốn nhất.',
      lessons: 9,
      roadmap: [
        {
          name: 'Phần 1: Tổng quan',
          lessons: [
            {
              name: 'Bài 1: Giới thiệu',
            },
            {
              name: 'Bài 2: Tầm quan trọng của kỹ năng thuyết trình chuyên nghiệp',
              resources: [
                'TamQuanTrong.pdf',
              ]
            },
            {
              name: 'Bài 3: Phân tích các yếu tố ảnh hưởng đến hiệu quả thuyết trình',
              resources: [
                'PhanTich.pdf',
              ]
            }
          ]
        },

        {
          name: 'Phần 2: Công tác chuẩn bị để thuyết trình trở nên chuyên nghiệp',
          lessons: [
            {
              name: 'Bài 4: Sử dụng công cụ hỗ trợ',
              resources: [
                'HuongDanCaiDat.docx',
              ]
            },
            {
              name: 'Bài 5: Một số phương pháp thực hành trước',
              resources: [
                'BaiTap.pdf',
              ]
            }
          ]
        },

        {
          name: 'Phần 3: Nghệ thuật thuyết trình',
          lessons: [
            {
              name: 'Bài 6: Hướng dẫn cách biểu đạt: ngôn từ, ngữ điệu, hình thể',
            },
            {
              name: 'Bài 7: Kiểm soát và phân tích tâm lý',
            }
          ]
        },

        {
          name: 'Phần 4: Tổng kết, đánh giá',
          lessons: [
            {
              name: 'Bài 8: Thị phạm thực hành và xử lý các tình huống giả',
            },
            {
              name: 'Bài 9: Tổng kết và rút kinh nghiệm',
            }
          ]
        }
      ]
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
        'Tham gia khóa học trực tuyến khóa học làm chủ thời gian ngay hôm nay để có thể làm chủ được thời gian của mình và chia sẻ niềm vui cuộc sống với người thân, bạn bè.',
      lessons: 9,
      roadmap: [
        {
          name: 'Phần 1: Tổng quan khóa học',
          lessons: [
            {
              name: 'Bài 1: Làm chủ thời gian',
            },
            {
              name: 'Bài 2: Giá trị của thời gian',
              resources: [
                'TaiLieu1.pdf',
                'TaiLieu2.pdf'
              ]
            },
          ]
        },

        {
          name: 'Phần 2: Ngày hiệu quả',
          lessons: [
            {
              name: 'Bài 3: Nhật ký thời gian',
              resources: [
                'TaiLieu.pdf',
              ]
            },
            {
              name: 'Bài 4: Quỹ thời gian',
            },
            {
              name: 'Bài 5: Danh mục Công việc phải làm',
            },
            {
              name: 'Bài 6: Ma trận thời gian',
            },
            {
              name: 'Bài 7: Phương pháp Kanban',
            },
          ]
        },

        {
          name: 'Phần 3: Tổng kết, đánh giá',
          lessons: [
            {
              name: 'Bài 8: Tổng kết khóa học'
            },
            {
              name: 'Bài 9: Bài kiểm tra trắc nghiệm',
            }
          ]
        }
      ]
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
      description: 'Giao tiếp là tập hợp những quy tắc, cách ứng xử, tương tác được đúc kết bằng những kinh nghiệm trong quá trình giao tiếp hằng ngày. Nghệ thuật giao tiếp được xem là một trong những kỹ năng mềm vô cùng quan trọng trong cuộc sống hiện nay. Nó không chỉ làm cầu nối gắn kết mối quan hệ giữa mọi người, mà còn là chìa khóa dẫn lối thành công trong mọi lĩnh vực',
      content: 'Trong công việc cũng như cuộc sống, giao tiếp là một yếu tố không thể thiếu giúp bạn có thể truyền tải thông điệp một cách dễ dàng. Thế nhưng không phải ai cũng biết cách giao tiếp thông minh, hiệu quả với người khác bởi bản thân mỗi chúng ta còn thiếu quá nhiều những kiến thức và kỹ năng cơ bản liên quan đến giao tiếp. Chính điều này đã làm cản trở việc xây dựng các mối quan hệ trong công việc và cuộc sống, khiến bạn trở thành một người rụt rè, tự ti, mờ nhạt. Do đó mà cơ hội thăng tiến trong công việc cũng gặp nhiều khó khăn do ấn tượng ban đầu không tốt cộng với hiệu suất công việc giảm đi nhiều lần.' +
        '<br><br>' +
        'Và Khóa học giao tiếp sẽ giúp bạn mở thêm nhiều mối quan hệ một cách thông minh, tinh tế, làm tăng giá trị sâu sắc hay tạo sự hấp dẫn cho chính bản thân bạn trong tất cả các cuộc giao tiếp, khiến đối phương phải cảm thấy hấp dẫn, thú vị cũng như nể phục.',
      lessons: 9,
      roadmap: [
        {
          name: 'Phần 1: Tổng quan',
          lessons: [
            {
              name: 'Bài 1: Vai trò của hoạt động giao tiếp',
            },
            {
              name: 'Bài 2: Cách thức tạo ấn tượng ban đầu trong giao tiếp',
            },
          ]
        },

        {
          name: 'Phần 2: Cơ bản',
          lessons: [
            {
              name: 'Bài 3: Nâng cao khả năng tâm lý khi giao tiếp',
              resources: [
                'TaiLieu.pdf',
              ]
            },
            {
              name: 'Bài 4: Kỹ năng phát triển câu chuyện trong lúc giao tiếp',
            },
            {
              name: 'Bài 5: Cách thức sử dụng giọng nói trong giao tiếp',
            }
          ]
        },

        {
          name: 'Phần 3: Nghệ thuật giao tiếp',
          lessons: [
            {
              name: 'Bài 6: Nghệ thuật thuyết phục trong giao tiếp',
            },
            {
              name: 'Bài 7: Kỹ năng thuyết trình thuyết phục',
            }
          ]
        },

        {
          name: 'Phần 4: Tổng kết, đánh giá',
          lessons: [
            {
              name: 'Bài 8: Thực hành'
            },
            {
              name: 'Bài 9: Tổng kết',
            }
          ]
        }
      ]
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
      description: 'Trong kỷ nguyên cách mạng khoa học, công nghệ thông tin ở thời điểm hiện tại và đặc biệt trong bối cảnh dịch bệnh Covid-19 đang hoành hành ở khắp mọi nơi, việc tăng cường ứng dụng công nghệ thông tin vào việc giảng dạy, thúc đẩy các phương pháp dạy học trực tuyến đang dần trở thành xu hướng, phổ biến tại khắp nơi trên thế giới, và ở nước ta cũng không phải ngoại lệ.',
      content: 'Đối với giáo viên, cho dù dạy môn học gì đi chăng nữa, bạn cũng cần phải có kỹ năng truyền đạt thông tin. Khi dạy học online, bạn không thể tương tác trực tiếp với học viên mà sẽ truyền tải kiến thức qua video. Chính vì vậy, đây là một trong số những kỹ năng quan trọng nhất trong giảng dạy trực tuyến.' +
        '<br><br>' +
        'Tính logic trong kiến thức truyền tải, sự đơn giản, dễ hiểu trong cách sử dụng từ ngữ, tông giọng truyền cảm phù hợp với môn học, đặc biệt là kết hợp ngôn ngữ cơ thể trong quá trình giảng dạy là tất cả những yếu tố bạn cần để có thể truyền đạt thông tin chính xác và hiệu quả nhất.' +
        '<br><br>' +
        'Một kỹ năng mềm khác cũng quan trọng không kém đó chính là kỹ năng soạn thảo và sử dụng các công cụ, phổ biến bao gồm: PowerPoint, Word, Excel,... với mục đích mang đến một bài giảng chất lượng, dễ tiếp thu cho học viên. Kỹ năng soạn thảo sẽ luôn song hành cùng với kỹ năng truyền đạt.' +
        '<br><br>' +
        'Để có thể truyền đạt tốt kiến thức, song song đó, bạn cần trình bày bài giảng một cách khoa học và dễ hiểu. Tùy theo từng môn học, từng đối tượng người học mà việc soạn thảo và trình bày sẽ khác nhau. Giả sử bạn dạy môn Toán, slide của bạn phải thật logic.',
      lessons: 10,
      roadmap: [
        {
          name: 'Phần 1: Giới thiệu tổng quan',
          lessons: [
            {
              name: 'Bài 1: giới thiệu về kỹ năng dạy online ',
            },
            {
              name: 'Bài 2:Hướng dẫn chi tiết ',
            }
          ]
        },

        {
          name: 'Phần 2: Nội dung cơ bản',
          lessons: [
            {
              name: 'Bài 3: Những kỹ năng mềm cần có khi dạy học trực tuyến',
            },
            {
              name: 'Bài 4: Kỹ năng soạn thảo, trình bày',
            },
            {
              name: 'Bài 5: Biết cách quay phim cơ bản',
            },
            {
              name: 'Bài 6: Những lưu ý, kinh nghiệm khi dạy học trực tuyến',
            },
            {
              name: 'Bài 7: Công tác chuẩn bị',
            },
            {
              name: 'Bài 8: Củng cố kiến thức ở cuối buổi học',
            }
          ]
        },

        {
          name: 'Phần 3: Tổng kết, đánh giá',
          lessons: [
            {
              name: 'Bài 9: Thực hành '
            },
            {
              name: 'Bài 10: Tổng kết',
            }
          ]
        }
      ],
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
      description: 'Bạn là người đi làm văn phòng và cần sử dụng thường xuyên bộ Office? Hãy tham gia khóa học này để nắm bắt kiến thức và làm chủ bộ Office 365 đầy mới mẻ. Với những buổi học hướng dẫn từng bước từ cơ bản, cách cài đặt, gõ chữ, trình bày văn bản, cho đến chia ô, chia cột và trình bày khung, bảng tính .v.v.',
      content: 'Tin học văn phòng là một kỹ năng thiết yếu cho mọi người hiện nay. Nó đã trở thành một tiêu chuẩn tuyển dụng ở nhiều công ty, đặc biệt những vị trí Nhân viên văn phòng, cần xử lý công việc giấy tờ, máy tính, thuyết trình…..Office 365 là công cụ soạn thảo văn bản thông dụng mà hầu hết các doanh nghiệp và cá nhân đang sử dụng. Nó là một trong những kỹ năng mà bạn cần nắm vững để xử lý mọi vấn đề liên quan. Tuy nhiên, rất nhiều người dùng chỉ sử dụng được tối đa 5% các tính năng có sẵn của nó, điều này dẫn đến hiệu quả công việc đạt được là không cao.' +
        '<br><br>' +
        'Bạn đang có nhu cầu tìm hiểu về Office 365 để nâng cao hiệu quả công việc ?' +
        '<br><br>' +
        'Hay bạn đang luyện thi chứng chỉ tin học văn phòng để tăng khả năng cạnh tranh cho bản thân…. ?' +
        '<br><br>' +
        'Bạn hoàn toàn có thể tự tin và thành thạo với Office 365.' +
        '<br><br>' +
        'Một tài liệu được trình bày rõ ràng, đẹp mắt sẽ giúp bạn ghi điểm trong mắt khách hàng, đối tác, nhà tuyển dụng. Tất cả những gì bạn cần là tham gia khóa học nhập môn office 365 từ cơ bản đến nâng cao. Chỉ sau 1 khoá học, bạn sẽ thấy kỹ năng soạn thảo office của mình thay đổi vượt bậc.',
      lessons: 10,
      roadmap: [
        {
          name: 'Phần 1: Tổng quan về Office 365 ',
          lessons: [
            {
              name: 'Bài 1: Giới thiệu tính năng Office 365',
            },
            {
              name: 'Bài 2: Hướng dẫn cơ bản Office 365',
            }
          ]
        },

        {
          name: 'Phần 2: Thực hành tổng quan',
          lessons: [
            {
              name: 'Bài 3: Word Online',
            },
            {
              name: 'Bài 4: Excel Online',
            },
            {
              name: 'Bài 5: PowerPoint Online',
            },
            {
              name: 'Bài 6: OneNote Online',
            },
            {
              name: 'Bài 7: Sway',
            },
            {
              name: 'Bài 8: Hướng dẫn cài đặt',
              resources: [
                'Office 365.pdf',
              ]
            },
          ]
        },
        {
          name: 'Phần 3: Tổng kết, đánh giá',
          lessons: [
            {
              name: 'Bài 9: Thực hành Office 365'
            },
            {
              name: 'Bài 10: Tổng kết',
            }
          ]
        }
      ]
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
      description: 'Microsoft Excel là một ứng dụng bảng tính. Nó sử dụng hệ thống các ô trong cột và hàng để thao tác, sắp xếp, tính toán dữ liệu. Bạn có thể sử dụng các bảng tổng hợp (PivotTable), biểu đồ, công thức và hàm theo nhiều cách khác nhau.Điều này cũng cho thấy ứng dụng không bị giới hạn bởi các con số dù tên của nó là “Excel”. Bạn có thể gõ nội dung, ảnh, video, đối tượng cùng nhiều kiểu dữ liệu khác để theo dõi, quản lý và dễ dàng xem thông tin.',
      content: 'Cell: Bảng tính được tạo thành bởi các khối hình chữ nhật, gọi là ô. Ô chứa dữ liệu bạn nhập vào, từ các con số tới từ, ảnh, công thức. Nói cách khác ô là vùng lưu thông tin. Bạn có thể nhập dữ liệu trực tiếp trong ô hoặc vào thanh công thức (text box) cho ô đó ngay dưới ribbon.' +
        '<br><br>' +
        'Tên ô nằm ở bên trái thanh công thức. Mặc định, nó hiển thị cột và hàng tương ứng cho ô đó. Ví dụ, ô ở góc bên trái trên cùng bảng tính là A1 cho cột A, hàng 1.' +
        '<br><br>' +
        'Formulas và Functions: Bạn có thể nghĩ formula là phép tính hay phương trình. Trong Excel, bạn có thể tạo công thức hoặc sử dụng hàm có sẵn. Những công thức này có thể tự động tính toán các con số theo phép cộng, phép nhân...' +
        '<br><br>' +
        'Ngoài tính toán, bạn có thể sử dụng các tính năng này cho mục đích khác như đếm số lượng mục trong cột hoặc hiển thị tối thiểu hay tối đa số mục trong nhóm ô.',
      lessons: 10,
      roadmap: [
        {
          name: 'Phần 1: Tổng quan về Excel ',
          lessons: [
            {
              name: 'Bài 1: Giới thiệu tính năng Excel',
            },
            {
              name: 'Bài 2: Hướng dẫn cơ bản Excel',
            }
          ]
        },

        {
          name: 'Phần 2: Thực hành tổng quan',
          lessons: [
            {
              name: 'Bài 3: Tab Excel và Ribbon',
            },
            {
              name: 'Bài 4: Quick Access Toolbar',
            },
            {
              name: 'Bài 5: Tùy chọn bảng tính',
            },
            {
              name: 'Bài 6: Mở một bảng tính',
            },
            {
              name: 'Bài 7: Làm việc với cột, hàng, ô trong Excel',
            },
            {
              name: 'Bài 8: Hướng dẫn cài đặt',
              resources: [
                'Excel.pdf',
              ]
            },
          ]
        },
        {
          name: 'Phần 3: Tổng kết, đánh giá',
          lessons: [
            {
              name: 'Bài 9: Thực hành  Excel '
            },
            {
              name: 'Bài 10: Tổng kết',
            }
          ]
        }
      ]
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
      description: 'Nếu bạn giống như hầu hết chúng tôi, có rất nhiều tác vụ và ghi chú quan trọng của bạn đến từ email. Bạn đã sử dụng Lịch Microsoft và To-Do-List để theo dõi công việc của mình, nhưng bạn muốn làm nhiều hơn thế.',
      content: 'Hầu hết mọi người không nhận ra rằng họ có thể sử dụng MS OneNote làm trình quản lý tác vụ Outlook với các công cụ To-Do-List của Lịch Outlook. Bằng cách thêm OneNote vào MS Outlook, bạn không chỉ có thể theo dõi các tác vụ của mình, mà bạn còn có thể theo dõi các thông tin khác đến bằng email trong các sổ tay tiện dụng với các tab. Thậm chí còn có các tính năng cộng tác OneNote mà bạn có thể sử dụng để chia sẻ thông tin của mình với những người khác.' +
        '<br><br>' +
        'MS OneNote là công cụ ghi chú / to-do-list, là một phần của bộ ứng dụng MS Office. Nó cho phép bạn tổ chức và lưu trữ thông tin cũng như theo dõi các cuộc họp và tác vụ. Khi bạn ở trường, bạn có thể đã sử dụng sổ ghi chép có các tab để giữ cho các giấy tờ của bạn có tổ chức. OneNote hoạt động theo cách tương tự, ngoại trừ việc sổ ghi chép của bạn hiện tại là ảo và các tab của bạn được gọi là các section.' +
        '<br><br>' +
        'OneNote được tích hợp vào MS Outlook và bạn có thể sử dụng nó cùng với MS Outlook Calendar và To Do List. Nó cũng có thể được tích hợp vào các ứng dụng phần mềm năng suất khác. OneNote cũng bao gồm các công cụ cộng tác tương đương.',
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
})

export const mutations = {
  loadUser(state, { role }) {
    state.user = role === 'student'
      ? {
        name: 'Nguyễn Hồng Hoa',
        avatar: '/student-avatar.jpg',
        role: 'student',
        enrolled: [],
        bookmark: [1],
      } : {
        name: 'Nguyễn Tiến Dũng',
        avatar: '/teacher-avatar.jpg',
        role: 'teacher',
      }
  },

  removeBookmark(state, { courseId }) {
    const index = state.user.bookmark.indexOf(courseId)

    if (index > -1) {
      state.user.bookmark.splice(index, 1)
    }
  },

  addBookmark(state, { courseId }) {
    state.user.bookmark.push(courseId)
  }
}
